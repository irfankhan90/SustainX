# SustainX Hostinger Production Deployment Guide

This guide provides step-by-step instructions to deploy the SustainX application on Hostinger using your registered domain.

---

## Architecture Overview for Hostinger Deployment

Depending on your Hostinger plan, you can choose between two main deployment routes:

1. **Option A: Hostinger VPS (Virtual Private Server) — *Recommended***
   * Allows full control. Runs both Next.js and Express servers concurrently using **PM2**.
   * Routes external traffic via an **Nginx** reverse proxy.
   * Runs **PostgreSQL** natively on the virtual server.
2. **Option B: Hostinger Shared or Cloud Hosting**
   * Uses Hostinger's hPanel Node.js app module to serve the backend.
   * Deploys the frontend as a static export or separate Node.js wrapper.
   * Relies on an external managed PostgreSQL instance (e.g. Neon, Supabase) since PostgreSQL cannot run natively inside Hostinger Shared Hosting databases (which are limited to MySQL).

---

## Option A: Deploying on Hostinger VPS (Recommended)

### Step 1: Initial Server Setup
1. Log in to your Hostinger VPS via SSH:
   ```bash
   ssh root@your_vps_ip
   ```
2. Update the package list and install Node.js (v20+), NPM, Nginx, and Git:
   ```bash
   sudo apt-get update
   sudo apt-get install -y nodejs npm nginx git
   ```
3. Install PM2 globally to manage Node.js processes in the background:
   ```bash
   sudo npm install -y pm2 -g
   ```

### Step 2: Install and Seed PostgreSQL
1. Install PostgreSQL:
   ```bash
   sudo apt-get install -y postgresql postgresql-contrib
   ```
2. Log in as the `postgres` user and create the database and user:
   ```bash
   sudo -i -u postgres
   psql
   ```
3. Run the following queries:
   ```sql
   CREATE DATABASE sustainx;
   CREATE USER sustainx_admin WITH PASSWORD 'YourSecurePasswordHere';
   GRANT ALL PRIVILEGES ON DATABASE sustainx TO sustainx_admin;
   \q
   exit
   ```

### Step 3: Clone and Configure the Application
1. Clone your repository into a directory (e.g., `/var/www/sustainx`):
   ```bash
   cd /var/www
   git clone <your-repo-url> sustainx
   cd sustainx
   ```
2. Configure backend environment files:
   Create `/var/www/sustainx/backend/.env`:
   ```env
   PORT=5000
   NODE_ENV=production
   JWT_SECRET=generate_a_secure_long_random_key_here
   JWT_EXPIRES_IN=7d
   DATABASE_URL=postgresql://sustainx_admin:YourSecurePasswordHere@localhost:5432/sustainx
   CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
   ADMIN_EMAIL=youradmin@email.com
   
   # SMTP Settings
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=no-reply@yourdomain.com
   SMTP_PASS=YourEmailPasswordHere
   SMTP_FROM=no-reply@yourdomain.com
   ```
3. Run backend migrations and seed data:
   ```bash
   cd backend
   npm install
   npm run build
   # Run migrations and seed the initial administrator user
   npm run db:migrate
   npm run db:seed
   ```
4. Start the backend service using PM2:
   ```bash
   pm2 start dist/server.js --name "sustainx-backend"
   ```

### Step 4: Build and Deploy the Frontend
1. Configure frontend environment variables. Create `/var/www/sustainx/frontend/.env.production`:
   ```env
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   ```
2. Build the Next.js application:
   ```bash
   cd ../frontend
   npm install
   npm run build
   ```
3. Start the Next.js frontend server with PM2:
   ```bash
   pm2 start npm --name "sustainx-frontend" -- run start -- -p 3000
   ```
4. Save PM2 configurations to survive reboot:
   ```bash
   pm2 save
   pm2 startup
   ```

### Step 5: Setup Nginx Reverse Proxy & SSL (HTTPS)
1. Delete default Nginx site configs:
   ```bash
   sudo rm /etc/nginx/sites-enabled/default
   ```
2. Create `/etc/nginx/sites-available/sustainx`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://127.0.0.1:3000; # Routes to frontend
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }

   server {
       listen 80;
       server_name api.yourdomain.com;

       location / {
           proxy_pass http://127.0.0.1:5000; # Routes to backend API
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
3. Enable configuration and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/sustainx /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```
4. Secure the server with SSL certificates via Let's Encrypt (Certbot):
   ```bash
   sudo apt-get install snapd -y
   sudo snap install --classic certbot
   sudo ln -s /snap/bin/certbot /usr/bin/certbot
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com
   ```

---

## Option B: Deploying on Hostinger Shared or Cloud Hosting

If you are using Hostinger Shared or Cloud hosting plans (without a VPS), the deployment steps are managed directly through Hostinger's hPanel interface.

### Step 1: Create an External PostgreSQL Database
Since Hostinger Shared databases are limited to MySQL:
1. Create a free PostgreSQL database on [Neon.tech](https://neon.tech) or [Supabase](https://supabase.com).
2. Copy the external PostgreSQL connection string (`DATABASE_URL`).

### Step 2: Configure and Upload Backend Node.js App
1. Inside your repository, ensure the backend is fully built:
   ```bash
   cd backend
   npm install
   npm run build
   ```
2. Compress the backend folder (excluding `node_modules`).
3. Log in to Hostinger hPanel, go to **Advanced > Node.js**, and click **Create Application**.
4. Set the **Application Path** (e.g. `sustainx-backend`), choose Node.js version 20+, and select `dist/server.js` as the startup file.
5. In hPanel, upload your zipped backend code into the application folder and extract it.
6. Configure the hPanel Node.js Application Environment Variables:
   * `NODE_ENV` = `production`
   * `JWT_SECRET` = `your_secret_key`
   * `DATABASE_URL` = `your_external_postgres_connection_string`
   * `CORS_ORIGIN` = `https://yourdomain.com`
7. Click **NPM Install** inside the hPanel Node.js panel to install required packages.
8. Point a subdomain (e.g. `api.yourdomain.com`) to this Node.js application.

### Step 3: Run Database Migrations
Run the migrations locally from your computer pointing directly to the external production PostgreSQL URL:
```bash
# In your local project root:
$env:DATABASE_URL="your_external_postgres_connection_string"
npm run db:migrate --prefix backend
npm run db:seed --prefix backend
```

### Step 4: Build and Deploy Frontend
For shared hosting, you can configure Next.js to compile as a Static Export:
1. Update `frontend/next.config.ts` to enable static exports:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   };

   export default nextConfig;
   ```
2. Build the static pages:
   ```bash
   cd frontend
   npm run build
   ```
3. Next.js creates an `out/` folder in the frontend.
4. Using Hostinger **File Manager**, upload all contents of the `frontend/out/` folder directly into your domain's primary root folder `public_html`.
5. Ensure your primary domain has SSL activated (Hostinger hPanel offers a single-click Lifetime SSL certificate option).

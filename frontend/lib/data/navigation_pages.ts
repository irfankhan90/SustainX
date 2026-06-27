export interface PageFeatureCard {
  title: string;
  desc: string;
  iconName: string;
}

export interface PageStatItem {
  value: string;
  label: string;
}

export interface PageData {
  slug: string;
  category: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  description: string;
  image: string;
  overview: string;
  features: PageFeatureCard[];
  stats: PageStatItem[];
  metaTitle: string;
  metaDesc: string;
  keywords: string;
}

export const NAVIGATION_PAGES: Record<string, PageData> = {
  // --- ABOUT PARENT & CHILD PAGES ---
  "about": {
    slug: "about",
    category: "About",
    badge: "WHO WE ARE",
    heroTitle: "Accelerating the Global Energy Transition through",
    heroHighlight: "Innovation & Integrity",
    description: "GlobalPact SustainX is the clean energy transition execution partner. We bridge the strategy-execution gap by integrating Strategy, PMC, Turnkey EPC, and Capacity Building.",
    image: "/sustainability_hero.png",
    overview: "At GlobalPact SustainX, we believe that the transition to clean energy is not just a strategic choice, but an operational necessity. We bring together engineering precision, financial viability models, and localized regulatory expertise to design, construct, and manage high-performing sustainability assets for corporations, utilities, and communities worldwide.",
    features: [
      { title: "Strategic Oversight", desc: "Formulate Net-Zero strategies and grid integration blueprints.", iconName: "strategic-insight" },
      { title: "Risk Mitigation", desc: "De-risk clean energy infrastructure developments from early phase.", iconName: "risk-opportunity" },
      { title: "EPC Capability", desc: "Execute engineering specs and synchronise utility installations.", iconName: "decarbonization" }
    ],
    stats: [
      { value: "50+", label: "Combined Years Experience" },
      { value: "30+", label: "Projects Executed" },
      { value: "10+", label: "Countries Served" }
    ],
    metaTitle: "About Us — Empowering Clean Energy transition | SustainX",
    metaDesc: "Discover SustainX, the clean energy execution partner bridging strategy and EPC turnkey solutions.",
    keywords: "about sustainx, energy transition partner, renewable assets, clean energy infrastructure"
  },
  "about-us": {
    slug: "about-us",
    category: "About",
    badge: "CORPORATE OVERVIEW",
    heroTitle: "Your Trusted Partner for Utility Scale",
    heroHighlight: "Decarbonization Assets",
    description: "Deep engineering capabilities, direct tier-1 manufacturer channels, and institutional advisory expertise aligned with global ESG frameworks.",
    image: "/sustainability_hero.png",
    overview: "GlobalPact SustainX operates as a unified platform delivering end-to-end decarbonization infrastructure. Our multidisciplinary team of engineers, carbon consultants, project managers, and tutors work in synergy to deliver assets that are fully compliant, highly efficient, and future-proofed against evolving grids.",
    features: [
      { title: "Institutional Quality", desc: "Engineering standards that satisfy top-tier audit requirements.", iconName: "esg-excellence" },
      { title: "Procurement Reach", desc: "Direct manufacturing relationships for high-capacity solar, wind, and storage.", iconName: "global-expertise" },
      { title: "Execution Track Record", desc: "Milestones achieved on schedule and within baseline budgets.", iconName: "sustainable-impact" }
    ],
    stats: [
      { value: "1.2M", label: "Tons CO2 Reduced" },
      { value: "2.4 GW", label: "Energy Managed" },
      { value: "150+", label: "Audits Completed" }
    ],
    metaTitle: "Corporate Profile — About Us | SustainX",
    metaDesc: "Read about SustainX, our execution capabilities, direct manufacturer channels, and ESG alignment.",
    keywords: "corporate profile, sustainx team, decarbonization asset, esg frameworks"
  },
  "vision": {
    slug: "vision",
    category: "About",
    badge: "STRATEGIC OUTLOOK",
    heroTitle: "Pioneering the Next Generation of",
    heroHighlight: "Clean Energy Grids",
    description: "A decentralized, high-stability renewable energy grid driven by artificial intelligence, smart storage, and certified engineering capability.",
    image: "/sustainx_hero_bg.png",
    overview: "Our vision is to build an interconnected global grid where clean energy is accessible, affordable, and resilient. We foresee a world where carbon accounting is automated, battery storage balances fluctuations, and organizations operates with zero compliance risk.",
    features: [
      { title: "Smart Grid Integration", desc: "Connecting decentralized solar, wind, and EV battery systems safely.", iconName: "energy-transition-planning" },
      { title: "AI Optimizations", desc: "Telemetry systems predicting grid loads and output yield.", iconName: "net-zero-consulting" },
      { title: "Frictionless transition", desc: "Helping carbon-intensive industries switch to clean energy assets.", iconName: "trending-down" }
    ],
    stats: [
      { value: "2030", label: "Net-Zero Vision Goal" },
      { value: "100%", label: "Grid Definitiveness" },
      { value: "10 GW+", label: "Target Capacity" }
    ],
    metaTitle: "Our Vision — Future of Smart Clean Grids | SustainX",
    metaDesc: "Explore the SustainX vision: AI-driven energy optimization, battery storage integration, and scalable decarbonization.",
    keywords: "renewable vision, future grids, smart grid scale, target carbon reduction"
  },
  "mission": {
    slug: "mission",
    category: "About",
    badge: "CORPORATE MISSION",
    heroTitle: "Bridging the Gap between Clean Strategy and",
    heroHighlight: "Real-World Execution",
    description: "To design, construct, monitor, and train. We guarantee asset performance and build capabilities to accelerate the net-zero pathway.",
    image: "/sustainx_landscape.png",
    overview: "SustainX is on a mission to eliminate the strategy-execution gap in sustainability. We don't just provide checklists; we grader sites, lay access paths, wire substations, audit compliance metrics, and upskill the engineering workforces required to operate these investments.",
    features: [
      { title: "Empowering Capabilities", desc: "Upskilling over 4,500 engineers globally to manage advanced clean tech.", iconName: "sustainable-impact" },
      { title: "Engineering Execution", desc: "Taking direct ownership of EPC construction and timeline limits.", iconName: "decarbonization" },
      { title: "Environmental Stewardship", desc: "Enforcing Scope 1-3 reductions backed by verifiable audits.", iconName: "esg-excellence" }
    ],
    stats: [
      { value: "100%", label: "Execution Sincerity" },
      { value: "4.5K+", label: "Engineers Trained" },
      { value: "99.2%", label: "On-Time commission" }
    ],
    metaTitle: "Our Mission — Strategic Sustainability Execution | SustainX",
    metaDesc: "Read our mission to de-risk green investments, deliver turnkey EPC projects, and build internal capabilities.",
    keywords: "sustainx mission, upskill engineers, turnkey delivery metrics, green asset oversight"
  },
  "platform-features": {
    slug: "platform-features",
    category: "About",
    badge: "PLATFORM CAPABILITIES",
    heroTitle: "AI-Powered Operations & Telemetry",
    heroHighlight: "For Renewable Assets",
    description: "Real-time Scope 1, 2, and 3 carbon accounting, weather-predictive solar yield, and load balancing diagnostics on a single dashboard.",
    image: "/sustainx_pm.png",
    overview: "The SustainX platform integrates telemetry streams from solar panels, wind turbine nacelles, battery storage modules, and EV chargers. Our predictive models analyze these vectors to optimize load distributions and automate ESG disclosure reporting.",
    features: [
      { title: "Scope 1–3 Telemetry", desc: "Automated carbon accounting tracking compliance data points.", iconName: "strategic-insight" },
      { title: "Yield Simulations", desc: "TensorFlow models predicting wind and solar output profiles.", iconName: "net-zero-consulting" },
      { title: "Asset Optimization", desc: "Diagnostics detecting panel degradation or grid fluctuations.", iconName: "risk-opportunity" }
    ],
    stats: [
      { value: "24/7", label: "Telemetry Telepathy" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "50M+", label: "Telemetry Points" }
    ],
    metaTitle: "Platform Features — AI Sustainability Telemetry | SustainX",
    metaDesc: "Explore the features of the SustainX AI platform: live emissions audits, yield forecasting, and fleet charging.",
    keywords: "sustainability software, solar dashboard, co2 metrics tracking, energy telemetry"
  },
  "delivery-model": {
    slug: "delivery-model",
    category: "About",
    badge: "OPERATIONAL FRAMEWORK",
    heroTitle: "A Risk-Mitigated Model from Plan",
    heroHighlight: "To Commercial Handover",
    description: "Combining quantitative engineering, tier-1 direct sourcing, rigorous on-site supervision, and operational upskilling.",
    image: "/sustainx_advisory.png",
    overview: "SustainX operates on a highly structured project delivery system. By managing design, structural procurement, civil works, and grid interconnection under a single contract, we isolate developers from contractor delays and cost overruns.",
    features: [
      { title: "Design Assurance", desc: "Yield modeling using PVsyst and HOMER prior to ground grading.", iconName: "energy-transition-planning" },
      { title: "Procurement Power", desc: "Bulk sourcing lines ensuring materials arrive on-site as planned.", iconName: "global-expertise" },
      { title: "SLA Commissioning", desc: "Comprehensive hot-line testing and synchronization safety.", iconName: "check-circle" }
    ],
    stats: [
      { value: "1", label: "Contract Responsibility" },
      { value: "20%", label: "Schedule Speedup" },
      { value: "100%", label: "Compliance Success" }
    ],
    metaTitle: "Delivery Model — Project PMC Framework | SustainX",
    metaDesc: "Learn about the SustainX execution model: streamlined design, procurement, site coordination, and commissioning.",
    keywords: "project delivery system, solar construction model, epc framework, pmc milestones"
  },

  // --- CAPACITY BUILDING PAGES ---
  "certificate-programs": {
    slug: "certificate-programs",
    category: "Capacity Building",
    badge: "EDUCATION PORTAL",
    heroTitle: "Foundational & Advanced Energy",
    heroHighlight: "Professional Certificates",
    description: "Rigorous hybrid modules spanning Solar PV engineering, wind resource analysis, and ESG reporting formats for technical specialists.",
    image: "/sustainx_training.png",
    overview: "Our professional certificate programs provide engineers, project designers, and consultants with the practical capabilities required to run clean energy assets. Students get hands-on experience using industry-standard software (PVsyst, HOMER) and simulator modules.",
    features: [
      { title: "Solar Engineering", desc: "PVsyst layout design, battery sizing, and cabling optimization.", iconName: "strategic-insight" },
      { title: "ESG Disclosures", desc: "Hands-on reporting exercises complying with regional laws.", iconName: "esg-excellence" },
      { title: "Wind Resource Assessment", desc: "Analyzing weather vectors and choosing optimal turbine structures.", iconName: "risk-opportunity" }
    ],
    stats: [
      { value: "5", label: "Active Certificates" },
      { value: "2,500+", label: "Engineers Certified" },
      { value: "85%", label: "Employment Uptrend" }
    ],
    metaTitle: "Renewable Energy Certificates — Upskilling | SustainX",
    metaDesc: "Boost your credentials with certified solar PV engineering and ESG reporting tracks from SustainX.",
    keywords: "solar energy certificate, pvsyst engineering program, esg auditor certification, renewable engineering"
  },
  "diploma-programs": {
    slug: "diploma-programs",
    category: "Capacity Building",
    badge: "CAREER ACCELERATOR",
    heroTitle: "Professional Diplomas for Project Managers",
    heroHighlight: "And Energy Leaders",
    description: "3–6 month hybrid paths containing capstone projects, financial modeling simulations, and advanced technology research.",
    image: "/sustainx_training.png",
    overview: "Our professional diploma programs prepare mid-level specialists to oversee complex green energy developments. The curriculum details lifecycle risk assessment, EPC contract structures, and grid integration logistics.",
    features: [
      { title: "Project Management PMC", desc: "Scheduling critical paths, procurement flow, and safety baselines.", iconName: "energy-transition-planning" },
      { title: "Financial Modeling", desc: "Formulating utility yields, investment paybacks, and LCOE ratios.", iconName: "net-zero-consulting" },
      { title: "Foresight Research", desc: "Assessing green hydrogen potential and offshore wind models.", iconName: "sustainable-impact" }
    ],
    stats: [
      { value: "3-6", label: "Months Hybrid Duration" },
      { value: "800+", label: "Diploma Holders" },
      { value: "92%", label: "Promotion Rate" }
    ],
    metaTitle: "Renewable Energy Diplomas — Career Path | SustainX",
    metaDesc: "Join our comprehensive diploma tracks in clean energy PMC, financial modeling, and asset strategy.",
    keywords: "energy management diploma, climate finance program, wind developer diploma"
  },
  "executive-corporate-programs": {
    slug: "executive-corporate-programs",
    category: "Capacity Building",
    badge: "EXECUTIVE BRIEFINGS",
    heroTitle: "Executive Leadership & Corporate Intensives",
    heroHighlight: "For Decision Makers",
    description: "High-level hybrid seminars detailing carbon offset dynamics, ESG reporting compliance, and transition financing.",
    image: "/sustainx_training.png",
    overview: "SustainX corporate intensives provide C-suite leaders, directors, and policymakers with the strategic insights required to direct corporate net-zero roadmaps. We focus on regulatory risks, sustainable finance options, and carbon trading mechanics.",
    features: [
      { title: "Net-Zero Strategies", desc: "Integrating transition paths into corporate business models.", iconName: "esg-excellence" },
      { title: "Sustainable Finance", desc: "Issuing green bonds and qualifying for impact investment capital.", iconName: "net-zero-consulting" },
      { title: "Carbon Markets", desc: "Understanding compliance credits, voluntary offsetting, and carbon taxes.", iconName: "global-expertise" }
    ],
    stats: [
      { value: "4-5", label: "Days Intensive Format" },
      { value: "1,200+", label: "CXOs Briefed" },
      { value: "75+", label: "Corporate Partners" }
    ],
    metaTitle: "Corporate Sustainability Intensives — Executive Briefs | SustainX",
    metaDesc: "Future-proof your company. Read about our corporate seminars in ESG audits, climate risk, and green financing.",
    keywords: "executive net zero training, green bonds course, corporate sustainability path"
  },

  // --- AI IN SUSTAINABILITY ---
  "ai-in-sustainability": {
    slug: "ai-in-sustainability",
    category: "AI",
    badge: "AI CORE",
    heroTitle: "Autonomous Carbon Accounting & Smart Grids",
    heroHighlight: "Powered by Artificial Intelligence",
    description: "Integrating TensorFlow model vectors, weather predictors, and load monitoring to automate decarbonization audits.",
    image: "/sustainability_hero.png",
    overview: "SustainX AI systems directly tackle grid synchronization and ESG audit challenges. Our models automate emission calculations across global supply chains and adjust solar/battery load factors to prevent outages.",
    features: [
      { title: "Predictive Telemetry", desc: "Forecasting solar and wind outputs with weather models.", iconName: "strategic-insight" },
      { title: "Audit Automation", desc: "Collecting data points to file Scope 1–3 emissions disclosures.", iconName: "net-zero-consulting" },
      { title: "Grid Flow Balancing", desc: "Automating battery reserves and EV fleet charging intervals.", iconName: "energy-transition-planning" }
    ],
    stats: [
      { value: "99.8%", label: "Audit Accuracy" },
      { value: "15%", label: "Grid Load Optimization" },
      { value: "3.5s", label: "Fault Response Time" }
    ],
    metaTitle: "AI in Sustainability — Automated Decarbonization | SustainX",
    metaDesc: "Discover the SustainX AI platform: automated carbon accounting, smart grid load planning, and solar output simulations.",
    keywords: "artificial intelligence climate tech, automated scope 3 tracking, smart grid solar predictive, esg analytics"
  },

  // --- PARTNERSHIPS ---
  "our-partners": {
    slug: "our-partners",
    category: "Partnerships",
    badge: "GLOBAL ALLIANCES",
    heroTitle: "Driving Decarbonization with the World's",
    heroHighlight: "Leading Enterprises",
    description: "We collaborate with global utilities, real estate portfolios, agricultural cooperatives, and engineering boards.",
    image: "/sustainx_landscape.png",
    overview: "GlobalPact SustainX partners with institutions committed to executing measurable net-zero transitions. By sharing technical assets, simulation tools, and workforce upskilling tracks, we build a cohesive green energy ecosystem.",
    features: [
      { title: "Utility Scale Integration", desc: "Deploying solar microgrids alongside regional utility grids.", iconName: "energy-transition-planning" },
      { title: "Educational Accreditations", desc: "Co-certifying engineers with international licensing boards.", iconName: "sustainable-impact" },
      { title: "Sovereign Alliances", desc: "Advising regional ministries on carbon compliance framework rules.", iconName: "esg-excellence" }
    ],
    stats: [
      { value: "45+", label: "Strategic Partners" },
      { value: "12", label: "Utility Integrations" },
      { value: "100%", label: "Audit Acceptance" }
    ],
    metaTitle: "Our Partners — Climate Transition Alliances | SustainX",
    metaDesc: "See our network of enterprise partners, utility grids, and academic licensing bodies cooperating for net-zero paths.",
    keywords: "sustainx alliances, clean energy collaborators, carbon transition networks"
  },
  "for-partners": {
    slug: "for-partners",
    category: "Partnerships",
    badge: "JOIN THE ECOSYSTEM",
    heroTitle: "Build, Advise, and Retrain as a",
    heroHighlight: "SustainX Certified Partner",
    description: "Access our yield simulation libraries, deploy upskilling programs to your clients, and bid with verified EPC teams.",
    image: "/sustainx_landscape.png",
    overview: "If you are an engineering developer, sustainability consultancy, or regional training provider, the SustainX Partner Network provides the tools, credentials, and sourcing channels required to execute decarbonization projects at scale.",
    features: [
      { title: "Co-Branded Learning", desc: "Deliver our certificate and diploma curricula locally.", iconName: "sustainable-impact" },
      { title: "Design Tools License", desc: "Access custom solar yield and battery lifecycle calculators.", iconName: "net-zero-consulting" },
      { title: "Contractor Network", desc: "Bid on turnkey projects backed by our construction supervision.", iconName: "global-expertise" }
    ],
    stats: [
      { value: "48h", label: "Onboarding Window" },
      { value: "100%", label: "Material Support" },
      { value: "30%", label: "Efficiency Speedup" }
    ],
    metaTitle: "Join SustainX Partner Program — Ecosystem | SustainX",
    metaDesc: "Expand your advisory, training, or development business. Read our partner network features.",
    keywords: "partner energy networks, green building certification, solar designer franchise"
  },

  // --- TEAM ---
  "management": {
    slug: "management",
    category: "Team",
    badge: "BOARD OF DIRECTORS",
    heroTitle: "Renewable Energy Developers & Climate Directors",
    heroHighlight: "Leading SustainX Execution",
    description: "Our leadership team combines utility engineers, solar project designers, corporate attorneys, and finance specialists.",
    image: "/sustainability_hero.png",
    overview: "SustainX leadership focuses on execution. We bring decades of combined experience managing grid integrations, structuring carbon offsets, bidding EPC works, and upskilling professional workforces.",
    features: [
      { title: "Engineering Directors", desc: "Leading solar design, wind profiling, and high-voltage grid syncs.", iconName: "decarbonization" },
      { title: "Climate Attorneys", desc: "Navigating international laws, tax credits, and carbon filings.", iconName: "esg-excellence" },
      { title: "Academicians & Tutors", desc: "Authoring simulator curricula and safety labs.", iconName: "sustainable-impact" }
    ],
    stats: [
      { value: "50+", label: "Years Combined Experience" },
      { value: "30+", label: "Utility Scales Built" },
      { value: "100%", label: "Execution Sincerity" }
    ],
    metaTitle: "Our Management Team — Corporate Leadership | SustainX",
    metaDesc: "Meet the directors, engineers, and strategists leading the SustainX clean energy platform.",
    keywords: "sustainx directors, solar asset executives, clean tech management, carbon compliance leaders"
  },
  "advisory-board": {
    slug: "advisory-board",
    category: "Team",
    badge: "ADVISORY BOARD",
    heroTitle: "Regulatory Specialists & Technical Advisors",
    heroHighlight: "Guiding Clean Strategies",
    description: "Cross-sector experts ensuring our methodologies align with global standards, utility requirements, and compliance metrics.",
    image: "/sustainability_hero.png",
    overview: "Our advisory board guides our development pathways. They review simulation parameters, audit course curriculums, check code compliance, and ensure our projects qualify for institutional impact funding.",
    features: [
      { title: "Grid Specialists", desc: "Advising on substation protections and grid transient controls.", iconName: "energy-transition-planning" },
      { title: "ESG Standards Advisors", desc: "Validating disclosure models against TCFD and CSRD formats.", iconName: "esg-excellence" },
      { title: "Capital Structuring Advisors", desc: "Optimizing LCOE parameters for green bond allocations.", iconName: "net-zero-consulting" }
    ],
    stats: [
      { value: "15", label: "Board Members" },
      { value: "250+", label: "Research Papers Published" },
      { value: "100%", label: "Methodology Integrity" }
    ],
    metaTitle: "Our Advisory Board — Technical Advisors | SustainX",
    metaDesc: "Read about the regulatory, finance, and engineering specialists guiding our methods.",
    keywords: "energy transition advisory board, grid advisors, sustainability standards board"
  },

  // --- CONTACT ---
  "contact": {
    slug: "contact",
    category: "Contact",
    badge: "GLOBAL DESKS",
    heroTitle: "Connect with Our Strategic Advisory Desk &",
    heroHighlight: "Project Managers Today",
    description: "Submit your compliance audits, project bids, upskilling requests, or partnership inquiries for qualification.",
    image: "/sustainx_landscape.png",
    overview: "SustainX provides localized offices in major energy transition centers. Connect with our client support desks or submit your request to be qualified by our regional managing directors immediately.",
    features: [
      { title: "24h Response SLA", desc: "All strategic inquiry inputs are qualifying within 1 business day.", iconName: "check-circle" },
      { title: "Technical Desks", desc: "Connect directly with design engineers or climate auditors.", iconName: "strategic-insight" },
      { title: "Partnership Desk", desc: "Become a licensed tutor or co-developer on green bids.", iconName: "global-expertise" }
    ],
    stats: [
      { value: "24h", label: "Qualification Window" },
      { value: "48h", label: "Technical Feedback" },
      { value: "100%", label: "Direct Support" }
    ],
    metaTitle: "Contact Us — Customer & Project Support | SustainX",
    metaDesc: "Get in touch with SustainX. Connect with our engineering, advisory, or partner desks.",
    keywords: "contact sustainx, project inquiry, solar project PMC consulting, green upskilling support"
  }
};

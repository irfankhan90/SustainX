import os
from PIL import Image

def crop_image(image_path):
    print(f"Loading image from: {image_path}")
    img = Image.open(image_path)
    # Convert to RGB if not already
    img_rgb = img.convert("RGB")
    width, height = img_rgb.size
    
    # Threshold to identify non-white background pixels
    # (Since JPEG compression can cause white to not be exactly 255, 255, 255)
    threshold = 248
    
    left = width
    top = height
    right = 0
    bottom = 0
    
    pixels_found = False
    
    for y in range(height):
        for x in range(width):
            r, g, b = img_rgb.getpixel((x, y))
            # If the pixel is not white (any channel is below the threshold)
            if r < threshold or g < threshold or b < threshold:
                pixels_found = True
                if x < left: left = x
                if x > right: right = x
                if y < top: top = y
                if y > bottom: bottom = y
                
    if not pixels_found:
        print("No non-white pixels found! Image might be completely white.")
        return
        
    # Add a small padding of 2 pixels around the cropped box to avoid clipping artwork edges
    padding = 2
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(width, right + padding)
    bottom = min(height, bottom + padding)
    
    print(f"Bounding box calculated: left={left}, top={top}, right={right}, bottom={bottom}")
    cropped_img = img.crop((left, top, right, bottom))
    
    # Save back
    cropped_img.save(image_path, "JPEG", quality=100)
    print("Successfully cropped and saved the logo image!")

if __name__ == "__main__":
    logo_path = os.path.abspath("public/logo.jpg")
    crop_image(logo_path)

from PIL import Image
import os

def crop_image(path):
    try:
        img = Image.open(path)
        img = img.convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            cropped.save(path)
            print(f"Cropped {path}: Original size {img.size} -> New size {cropped.size}")
        else:
            print(f"No content found in {path}")
    except Exception as e:
        print(f"Error processing {path}: {e}")

logos = [
    r"c:\Users\iban.martinez\Desktop\Script python\COCO\public\logos\NEGRO.png",
    r"c:\Users\iban.martinez\Desktop\Script python\COCO\public\logos\MARRÓN.png"
]

for logo in logos:
    if os.path.exists(logo):
        crop_image(logo)
    else:
        print(f"File not found: {logo}")

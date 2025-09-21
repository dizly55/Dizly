import requests
from PIL import Image
import io

# Flask server URL
url = "http://127.0.0.1:5000/remove-bg"

# Input image path
file_path = "C:\\Users\\mlc\\OneDrive\\Documents\\Dizly\\dizly\\src\\Images\\test.jpg"

# Open the image and send POST request
with open(file_path, "rb") as f:
    files = {"image": f}
    response = requests.post(url, files=files)

# Check if request was successful
if response.status_code == 200:
    # Convert response content to PIL image to ensure it's valid
    output_image = Image.open(io.BytesIO(response.content))
    output_image.save("output.png", format="PNG")  # save properly as PNG
    print("✅ Background removed! Saved as output.png")
else:
    print(f"❌ Error: {response.status_code} - {response.text}")

from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from datetime import datetime
from PIL import Image, ImageDraw
from diffusers import StableDiffusionPipeline
import matplotlib.pyplot as plt


# # Create folders if not exists
# os.makedirs("static", exist_ok=True)

app = FastAPI()

# Allow all CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/public", StaticFiles(directory="public"), name="public")

class Prompt(BaseModel):
    prompt: str

@app.post("/generate")
def generate_image(prompt: Prompt):
    text = prompt.prompt
    print(f"Received prompt object: {prompt}")
    print(f"Extracted text: {prompt.prompt}")

    pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
    pipe.to("cpu")  # Move the model to the CPU
    
    generated_image = pipe(text, height=512, width=512).images[0]
    
    # plt.imshow(generated_image) # Optional: can be removed if not debugging locally
    # plt.axis("off")
    # plt.show()

    
    filename = f"image_{datetime.now().strftime('%Y%m%d%H%M%S')}.png" # Use this for unique names
    
    path = os.path.join("public", filename)
    generated_image.save(path)
    print(f"Image saved to: {path}") # For server-side logging

    # Return the key 'image_url' with the relative path to the image
    return {"image_url": f"/public/{filename}"}
   

@app.get("/")
def root():
    return {"message": "FastAPI backend is running"}

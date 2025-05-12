from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from datetime import datetime
from PIL import Image, ImageDraw
from diffusers import StableDiffusionPipeline
import matplotlib.pyplot as plt


# Create folders if not exists
os.makedirs("static", exist_ok=True)

app = FastAPI()

# Allow all CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

class Prompt(BaseModel):
    prompt: str

@app.post("/generate")
def generate_image(prompt: Prompt):
    text = prompt.prompt

    pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
    # pipe.to("cuda")  # Move the model to the GPU


    # Define the prompt for image generation
    # prompt = "a beautiful purple bird"

    # Generate a smaller image (e.g., 512x512 instead of 1024x1024)
    generated_image = pipe(prompt.prompt, height=512, width=512).images[0]  # Resize to 512x512

    # Save the generated image to a file
    filename = f"image_{datetime.now().strftime('%Y%m%d%H%M%S')}.png"
    path = os.path.join("static", filename)
    generated_image.save(path)

    return {"image_url": f"/static/{filename}"}

@app.get("/")
def root():
    return {"message": "FastAPI backend is running"}

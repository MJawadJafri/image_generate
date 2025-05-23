 React → FastAPI Flow:
React calls POST /generate with a prompt.

FastAPI receives the prompt, calls generate_image(prompt).

Image is saved to static/.

FastAPI returns URL like http://localhost:8000/static/generated.png.

React displays the image.


install Dependencies (Add at the top):

!pip install fastapi uvicorn pyngrok diffusers transformers torch accelerate safetensors


In your backend folder, run:

pip install fastapi[all]

or just:

pip install fastapi uvicorn python-multipart fastapi-cors


for frontend server

npm start 

for backend server

Run on commend (prompt) FastAPI:

 uvicorn main:app --reload
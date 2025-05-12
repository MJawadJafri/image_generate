import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);  // Match FastAPI key

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPrediction(response.data.prediction);
    } catch (err) {
      console.error(err);
      setPrediction("Error in prediction.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Upload an Image for Prediction</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <br /><br />
      <button onClick={handleSubmit}>Predict</button>
      <br /><br />
      {prediction && <p><strong>Prediction:</strong> {prediction}</p>}
    </div>
  );
}

export default ImageUpload;

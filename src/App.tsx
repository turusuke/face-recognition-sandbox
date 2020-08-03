import React, { useEffect } from "react";
import * as faceapi from "face-api.js";
import "./App.css";

const startVideo = async (video: HTMLVideoElement) => {
  try {
    const constraints = { audio: false, video: {} };
    video.srcObject = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (error) {
    console.error(error);
  }
};

const tinyFaceDetectorOption = {
  inputSize: 224,
  scoreThreshold: 0.5
};

async function interval(video: HTMLVideoElement, canvas: HTMLCanvasElement, displaySize: faceapi.IDimensions) :Promise<undefined | number>{
  const detectionsWithLandmarks = await faceapi
    .detectAllFaces(
      video,
      new faceapi.TinyFaceDetectorOptions(tinyFaceDetectorOption)
    )
    .withFaceLandmarks();

  if (detectionsWithLandmarks.length <= 0)
    return window.requestAnimationFrame(() => interval(video, canvas, displaySize));

  const context = canvas.getContext("2d");
  if(!context) return;
  context.clearRect(0, 0, canvas.width, canvas.height);

  const resizedDetectionsWithLandmarks = faceapi.resizeResults(
    detectionsWithLandmarks,
    displaySize
  );
  faceapi.draw.drawFaceLandmarks(canvas, resizedDetectionsWithLandmarks);
  const leftEye = resizedDetectionsWithLandmarks[0].landmarks.getLeftEye()[1];
  const rightEye = resizedDetectionsWithLandmarks[0].landmarks.getRightEye()[1];
  context.font = "40px serif";
  context.fillText("ほ", leftEye.x, leftEye.y + 10);
  context.fillText("げ", rightEye.x, rightEye.y + 10);
  window.requestAnimationFrame(() => interval(video, canvas, displaySize));
}

function App() {
  useEffect(() => {
    const video = document.querySelector("video");
    if (!video) return;
    (async () => {
      await startVideo(video);
      await faceapi.nets.tinyFaceDetector.loadFromUri("/face-recognition-sandbox/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/face-recognition-sandbox/models");
      video.addEventListener("play", () => {
        const canvas = faceapi.createCanvasFromMedia(video);
        document.querySelector("main")?.append(canvas);
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);
        window.requestAnimationFrame(() => interval(video, canvas, displaySize));
      });
    })();
  });

  return (
    <div className="App">
      <main>
        <video id="video" width="720" height="560" autoPlay muted/>
      </main>
    </div>
  );
}

export default App;

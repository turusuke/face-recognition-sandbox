import * as faceapi from "face-api.js"

const startVideo = async (video) => {
  try {
    const constraints = { audio: false, video: {} }
    video.srcObject = await navigator.mediaDevices.getUserMedia(constraints)
  } catch (error) {
    console.error(error)
  }
}

const video = document.querySelector("video")

const tinyFaceDetectorOption = {
  inputSize: 224,
  scoreThreshold: 0.5,
}

async function interval(canvas, displaySize) {
  const detectionsWithLandmarks = await faceapi
    .detectAllFaces(
      video,
      new faceapi.TinyFaceDetectorOptions(tinyFaceDetectorOption)
    )
    .withFaceLandmarks()

  if (detectionsWithLandmarks.length <= 0)
    return window.requestAnimationFrame(() => interval(canvas, displaySize))
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)

  const resizedDetectionsWithLandmarks = faceapi.resizeResults(
    detectionsWithLandmarks,
    displaySize
  )
  faceapi.draw.drawFaceLandmarks(canvas, resizedDetectionsWithLandmarks)
  const leftEye = resizedDetectionsWithLandmarks[0].landmarks.getLeftEye()[1]
  const rightEye = resizedDetectionsWithLandmarks[0].landmarks.getRightEye()[1]
  canvas.getContext("2d").font = "40px serif"
  canvas.getContext("2d").fillText("ほ", leftEye.x, leftEye.y + 10)
  canvas.getContext("2d").fillText("げ", rightEye.x, rightEye.y + 10)
  window.requestAnimationFrame(() => interval(canvas, displaySize))
}

;(async () => {
  await startVideo(video)
  await faceapi.nets.tinyFaceDetector.loadFromUri("/models")
  await faceapi.nets.faceLandmark68Net.loadFromUri("/models")
  video.addEventListener("play", () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.querySelector("main").append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    window.requestAnimationFrame(() => interval(canvas, displaySize))
  })
})()

console.log(faceapi)

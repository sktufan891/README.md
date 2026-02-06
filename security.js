let verified=false;
const video=document.getElementById("cam");

navigator.mediaDevices.getUserMedia({video:true})
.then(s=>video.srcObject=s);

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("https://cdn.jsdelivr.net/npm/face-api.js/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("https://cdn.jsdelivr.net/npm/face-api.js/models"),
]);

async function verifyFace(){
  const d = await faceapi
    .detectSingleFace(video,new faceapi.TinyFaceDetectorOptions())
    .withFaceDescriptor();

  if(!d) return;

  const saved = JSON.parse(localStorage.getItem("face"));
  if(!saved){
    localStorage.setItem("face",JSON.stringify(d.descriptor));
    verified=true;
    speak("Sir, face secure kar liya gaya hai.");
    return;
  }

  const dist = faceapi.euclideanDistance(saved,d.descriptor);
  if(dist<0.45){
    verified=true;
    speak("Face verified. Welcome back sir.");
  }
}
setInterval(verifyFace,8000);

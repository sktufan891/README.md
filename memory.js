import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const app = initializeApp({
  apiKey:"YOUR_KEY",
  authDomain:"YOUR.firebaseapp.com",
  projectId:"YOUR_ID"
});

const db=getFirestore(app);

export async function saveMemory(uid,data){
  await setDoc(doc(db,"users",uid),data,{merge:true});
}

export async function loadMemory(uid){
  const s=await getDoc(doc(db,"users",uid));
  return s.exists()?s.data():{};
}

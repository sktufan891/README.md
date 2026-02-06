function speak(text){
  responsiveVoice.cancel();
  responsiveVoice.speak(text,"Hindi Male",{rate:0.9,pitch:1});
}

function beep(){
  new Audio("assets/beep.mp3").play();
}

let active=false;

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SR();
rec.lang="hi-IN";
rec.continuous=true;

rec.onstart=()=>responsiveVoice.cancel();

rec.onresult=e=>{
  const text=e.results[e.results.length-1][0].transcript.toLowerCase();

  if(!active && text.includes("jarvis")){
    active=true;
    beep();
    speak("Haan sir?");
    return;
  }

  if(active) handleCommand(text);
};

rec.start();

function handleCommand(cmd){
  if(cmd.includes("youtube")){
    window.open("https://youtube.com","_blank");
    speak("Ji sir, YouTube khol diya.");
  }
  else{
    askAI(cmd);
  }
}

document.getElementById("core").onclick=()=>{
  speak("Jarvis active ho gaya hai sir.");
};

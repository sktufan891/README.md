async function askAI(text){
  const r=await fetch("/.netlify/functions/ai",{
    method:"POST",
    body:JSON.stringify({q:text})
  });
  const j=await r.json();
  speak(j.reply);
}

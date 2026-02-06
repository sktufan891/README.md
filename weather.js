navigator.geolocation.getCurrentPosition(async pos=>{
  const {latitude,longitude}=pos.coords;
  const r=await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const j=await r.json();
  const t=j.current_weather.temperature;
  if(t>30) speak("Sir aaj garmi zyada hai.");
  else speak("Mausam kaafi comfortable hai sir.");
});

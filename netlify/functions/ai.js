export async function handler(event){
  const {q}=JSON.parse(event.body);
  const r=await fetch("https://api.deepseek.com/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+process.env.DEEPSEEK_API_KEY
    },
    body:JSON.stringify({
      model:"deepseek-chat",
      messages:[{role:"user",content:q}]
    })
  });
  const j=await r.json();
  return {
    statusCode:200,
    body:JSON.stringify({reply:j.choices[0].message.content})
  };
}

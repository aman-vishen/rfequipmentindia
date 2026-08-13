import { NextResponse } from 'next/server';
export const runtime='nodejs';
const text=(v:unknown,n=4000)=>typeof v==='string'?v.trim().slice(0,n):'';
export async function POST(request:Request){
 const body=await request.json().catch(()=>null) as Record<string,unknown>|null;
 if(!body)return NextResponse.json({error:'Invalid request'},{status:400});
 if(text(body.website))return NextResponse.json({ok:true});
 const name=text(body.name,150),company=text(body.company,200),email=text(body.email,254),category=text(body.category,200),requirements=text(body.requirements,6000);
 if(!name||!company||!email||!category||!requirements)return NextResponse.json({error:'Please complete all required fields.'},{status:400});
 if(!/^\S+@\S+\.\S+$/.test(email))return NextResponse.json({error:'Please enter a valid email address.'},{status:400});
 const apiKey=process.env.RESEND_API_KEY;
 if(!apiKey)return NextResponse.json({error:'Mail service is not configured.',fallback:true},{status:503});
 const message=[`Name: ${name}`,`Company: ${company}`,`Email: ${email}`,`Phone: ${text(body.phone,100)}`,`Location: ${text(body.location,150)}`,`Product / Solution: ${category}`,`DUT / Chipset: ${text(body.dut,500)}`,`Production Volume / UPH: ${text(body.volume,200)}`,`Timeline: ${text(body.timeline,200)}`,'',`Requirements: ${requirements}`].join('\n');
 try{
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json','User-Agent':'RF-Equipment-Website/1.0'},body:JSON.stringify({from:process.env.RFQ_FROM_EMAIL||'RF Equipment Website <onboarding@resend.dev>',to:[process.env.RFQ_TO_EMAIL||'info@rfequipment.in'],reply_to:email,subject:`RFQ: ${company} - ${category}`,text:message})});
  if(!response.ok)return NextResponse.json({error:'Email delivery failed.',fallback:true},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Email delivery failed.',fallback:true},{status:502})}
}

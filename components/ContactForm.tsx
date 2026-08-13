'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { site } from '@/lib/data';

type Status={kind:'idle'|'loading'|'success'|'error';message:string};

export function ContactForm(){
 const searchParams=useSearchParams();
 const requestedProduct=searchParams.get('product')||'';
 const suggestedCategory=requestedProduct.startsWith('JC-')?'RF Shield Box':requestedProduct?'Commpolar Optical Test':'';
 const [status,setStatus]=useState<Status>({kind:'idle',message:''});
 async function onSubmit(event:FormEvent<HTMLFormElement>){
   event.preventDefault();
   const form=event.currentTarget;
   const payload=Object.fromEntries(new FormData(form).entries());
   setStatus({kind:'loading',message:'Sending your enquiry…'});
   try{
     const response=await fetch('/api/rfq',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
     const result=await response.json().catch(()=>({}));
     if(response.ok){setStatus({kind:'success',message:'Thank you. Your RFQ has been sent to RF Equipment.'});form.reset();return;}
     if(result?.fallback){
       const subject=encodeURIComponent(`RFQ - ${payload.company||payload.name||'Website enquiry'}`);
       const body=encodeURIComponent([`Name: ${payload.name||''}`,`Company: ${payload.company||''}`,`Email: ${payload.email||''}`,`Phone: ${payload.phone||''}`,`Location: ${payload.location||''}`,`Product / Solution: ${payload.category||''}`,`DUT / Chipset: ${payload.dut||''}`,`Production Volume / UPH: ${payload.volume||''}`,`Timeline: ${payload.timeline||''}`,'',`Requirements: ${payload.requirements||''}`].join('\n'));
       window.location.href=`mailto:${site.email}?subject=${subject}&body=${body}`;
       setStatus({kind:'error',message:'The mail service is not configured yet, so your email application has been opened with the RFQ filled in.'});return;
     }
     throw new Error(result?.error||'Unable to send the form.');
   }catch(error){setStatus({kind:'error',message:error instanceof Error?error.message:'Unable to send the form. Please email or WhatsApp us.'});}
 }
 return <form className="rfq-form" onSubmit={onSubmit}>
   <div className="form-grid">
     <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" required/></div>
     <div className="field"><label htmlFor="company">Company *</label><input id="company" name="company" required/></div>
     <div className="field"><label htmlFor="email">Business email *</label><input id="email" name="email" type="email" required/></div>
     <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone"/></div>
     <div className="field"><label htmlFor="location">Country / City</label><input id="location" name="location"/></div>
     <div className="field"><label htmlFor="category">Product / solution *</label><select id="category" name="category" defaultValue={suggestedCategory} required><option value="">Select</option><option>RF Test Equipment</option><option>RF / Wi-Fi Calibration</option><option>Commpolar Optical Test</option><option>GPON / XGS-PON / FTTH Test</option><option>RF Shield Box</option><option>Network / Traffic Test</option><option>Production Automation</option><option>Complete Turnkey Manufacturing Solution</option><option>Other</option></select></div>
     <div className="field full"><label htmlFor="dut">DUT / chipset / interfaces</label><input id="dut" name="dut" defaultValue={requestedProduct}/></div>
     <div className="field"><label htmlFor="volume">Production volume / UPH</label><input id="volume" name="volume"/></div>
     <div className="field"><label htmlFor="timeline">Project timeline</label><input id="timeline" name="timeline"/></div>
     <div className="field full"><label htmlFor="requirements">Measurements & requirements *</label><textarea id="requirements" name="requirements" required/></div>
     <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div>
   </div>
   <div className="actions"><button className="btn btn-primary" type="submit" disabled={status.kind==='loading'}>{status.kind==='loading'?'Sending…':'Send RFQ'}</button><a className="btn btn-outline" href={site.whatsapp}>WhatsApp</a></div>
   <div className={`form-status ${status.kind}`} aria-live="polite">{status.message}</div>
   <p className="form-note">By submitting this form, you agree that RF Equipment may contact you regarding this enquiry.</p>
 </form>;
}

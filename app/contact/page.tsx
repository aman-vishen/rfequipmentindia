import { Suspense } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/data';
export default function Page(){return <><section className="page-hero"><div className="container"><p className="eyebrow">Contact & RFQ</p><h1>Tell us what you need to test.</h1><p className="lead">Share your DUT, chipset, test items and production target.</p></div></section><section className="section"><div className="container rfq-layout"><aside className="contact-meta"><h2>RF Equipment</h2><p><a href={`mailto:${site.email}`}>{site.email}</a></p><p><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p></aside><div><h2>Request a quotation</h2><Suspense fallback={<div className="rfq-form">Loading form</div>}><ContactForm/></Suspense></div></div></section></>}

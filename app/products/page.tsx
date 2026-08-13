import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata:Metadata={title:'Test & Measurement Products India',description:'RF, Wi-Fi, GPON, optical, network, shield box and production automation equipment from RF Equipment in India.',alternates:{canonical:'/products'}};

const items=[
  ['RF Test Equipment','Spectrum analyzers, signal generators, VNAs and RF power measurement systems.','RF','/contact'],
  ['Wi-Fi Calibration Systems','Production RF calibration, verification and multi-DUT automation.','Wireless','/rf-calibration'],
  ['Commpolar Optical Test Equipment','Optical power, ER, backreflection, BOSA calibration, PON, FTTH and transceiver test equipment from Commpolar.','Optical Partner','/commpolar'],
  ['RF Shield Boxes','Manual and pneumatic RF isolation enclosures for R&D and manufacturing.','Isolation','/shield-boxes'],
  ['Network & Traffic Test','Router, switch, NAT, throughput and stability testing.','Network','/solutions'],
  ['Production Test Automation','Fixtures, DUT control, multi-station software, traceability and MES integration.','Automation','/solutions']
];

export default function Page(){return <><section className="page-hero"><div className="container"><p className="eyebrow">Product Portfolio</p><h1>Test equipment selected around your measurement.</h1><p className="lead">Explore RF, wireless, optical, network and production-test solutions. Commpolar optical instruments and RF shield boxes are part of the RF Equipment product portfolio.</p></div></section><section className="section"><div className="container"><div className="grid">{items.map(([n,d,t,h])=><article className="card" key={n}><span className="tag">{t}</span><h3>{n}</h3><p>{d}</p><Link className="card-link" href={h}>View products →</Link></article>)}</div></div></section></>}

import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './nav.css';
import { navigation, site } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'RF Equipment | Test, Measurement & Telecom Manufacturing Solutions India',
    template: '%s | RF Equipment'
  },
  description: site.description,
  keywords: ['test and measurement equipment supplier India','RF test equipment India','Wi-Fi calibration solution','GPON ONT production test','BOSA calibration','RF shield box India','telecom manufacturing test solution'],
  alternates: { canonical: '/' },
  openGraph: { type:'website', siteName:site.name, title:'RF Equipment — Test, Measure, Connect', description:site.description, url:site.url, images:[{url:'/assets/rf-calibration-station.webp',width:1200,height:800,alt:'RF Equipment RF calibration production station'}] },
  twitter: { card:'summary_large_image', title:'RF Equipment — Test, Measure, Connect', description:site.description, images:['/assets/rf-calibration-station.webp'] },
  icons: { icon:'/assets/favicon.webp' }
};

const organizationJsonLd = {
  '@context':'https://schema.org','@type':'Organization',name:site.name,url:site.url,email:site.email,telephone:site.phone,logo:`${site.url}/assets/rf-equipment-logo.webp`,
  contactPoint:{'@type':'ContactPoint',telephone:site.phone,contactType:'sales',areaServed:'IN',availableLanguage:['English','Hindi']}
};

const mainNavigation = navigation.filter(item => !['/commpolar','/shield-boxes','/rf-calibration'].includes(item.href));

const productNavigation = [
  { href:'/products', label:'All Products', description:'Browse the complete RF Equipment portfolio' },
  { href:'/commpolar', label:'Commpolar', description:'Optical, PON, BOB and telecom test equipment' },
  { href:'/shield-boxes', label:'RF Shield Boxes', description:'Manual and pneumatic RF isolation enclosures' }
];

const solutionNavigation = [
  { href:'/solutions', label:'All Solutions', description:'Complete telecom manufacturing and test solutions' },
  { href:'/rf-calibration', label:'Wi-Fi Calibration', description:'RF calibration for MediaTek, Realtek, Qualcomm and Broadcom platforms' }
];

function DropdownNav({label,href,items}:{label:string;href:string;items:{href:string;label:string;description:string}[]}){
  return <div className="nav-dropdown">
    <Link className="nav-parent" href={href}>{label} <span className="chevron" aria-hidden="true">▼</span></Link>
    <div className="dropdown-menu">
      {items.map(item => <Link key={item.href} href={item.href}><strong>{item.label}</strong><span>{item.description}</span></Link>)}
    </div>
  </div>;
}

function DesktopNavigation(){
  return <nav className="nav" aria-label="Main navigation">
    {mainNavigation.map(item => {
      if(item.href === '/products') return <DropdownNav key={item.href} label="Products" href="/products" items={productNavigation}/>;
      if(item.href === '/solutions') return <DropdownNav key={item.href} label="Solutions" href="/solutions" items={solutionNavigation}/>;
      return <Link key={item.href} href={item.href}>{item.label}</Link>;
    })}
  </nav>;
}

function MobileGroup({label,href,items}:{label:string;href:string;items:{href:string;label:string}[]}){
  return <div className="mobile-product-group">
    <Link href={href}>{label}</Link>
    <div className="mobile-product-links">{items.filter(item=>item.href!==href).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
  </div>;
}

function MobileNavigation(){
  return <nav>
    {mainNavigation.map(item => {
      if(item.href === '/products') return <MobileGroup key={item.href} label="Products" href="/products" items={productNavigation}/>;
      if(item.href === '/solutions') return <MobileGroup key={item.href} label="Solutions" href="/solutions" items={solutionNavigation}/>;
      return <Link key={item.href} href={item.href}>{item.label}</Link>;
    })}
  </nav>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}} />
    <div className="topbar"><div className="container topbar-inner"><span>RF · Wireless · Optical · Telecom Production Test</span><span><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.whatsapp}>{site.phoneDisplay}</a></span></div></div>
    <header className="site-header"><div className="container nav-wrap">
      <Link className="brand" href="/" aria-label="RF Equipment home"><img src="/assets/rf-equipment-logo.webp" alt="RF Equipment — Test, Measure, Connect" /></Link>
      <DesktopNavigation />
      <div className="nav-cta"><Link className="btn btn-primary btn-small" href="/contact">Request a Quote</Link><details className="mobile-menu"><summary aria-label="Open menu"><span/><span/><span/></summary><MobileNavigation /></details></div>
    </div></header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-main"><div><img className="footer-logo" src="/assets/rf-equipment-logo.webp" alt="RF Equipment"/><p>Test, measurement and production automation solutions for RF, wireless, optical and telecom applications in India.</p></div><div><h3>Solutions</h3><div className="footer-links"><Link href="/rf-calibration">Wi-Fi Calibration</Link><Link href="/solutions">Turnkey Manufacturing</Link></div></div><div><h3>Products</h3><div className="footer-links"><Link href="/products">All Products</Link><Link href="/commpolar">Commpolar India</Link><Link href="/shield-boxes">RF Shield Boxes</Link></div></div><div><h3>Contact</h3><div className="footer-links"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.whatsapp}>WhatsApp {site.phoneDisplay}</a><Link href="/contact">Request Quotation</Link></div></div></div><div className="container footer-bottom"><span>© 2026 RF Equipment. All rights reserved.</span><span>Product names, model references and trademarks belong to their respective owners.</span></div></footer>
    <a className="whatsapp" href={site.whatsapp} aria-label="Chat with RF Equipment on WhatsApp">WhatsApp</a>
  </body></html>;
}

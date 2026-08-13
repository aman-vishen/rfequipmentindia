export const site = {
  name: 'RF Equipment',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rfequipment.in',
  email: 'info@rfequipment.in',
  phoneDisplay: '+91 97177 02842',
  phone: '+919717702842',
  whatsapp: 'https://wa.me/919717702842',
  description: 'RF Equipment supplies RF, wireless, optical and telecom test solutions in India, including Wi-Fi calibration, GPON/ONT production test, Commpolar optical test equipment and RF shield boxes.'
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/rf-calibration', label: 'RF Calibration' },
  { href: '/commpolar', label: 'Commpolar' },
  { href: '/shield-boxes', label: 'Shield Boxes' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export type CommpolarProduct = {
  slug: string;
  model: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  representativeImage?: boolean;
};

const images = {
  fiber: '/assets/commpolar-products/cmpa-2020c.webp',
  wdm: '/assets/commpolar-products/8610b.webp',
  onu: '/assets/commpolar-products/optix4000.webp',
  handheld: '/assets/commpolar-products/h3100b.webp',
  transceiver: '/assets/commpolar-products/8610b.webp'
};

export const commpolarProducts: CommpolarProduct[] = [
  { slug:'cable-plc-reliability-test-system', model:'Cable/PLC Reliability Test System', name:'Cable/PLC Reliability Test System', category:'Fiber / Patch Cord Testing', summary:'Reliability and production verification for fiber cable and PLC applications.', image:images.fiber, representativeImage:true },
  { slug:'link-parity-tester', model:'Link Parity Tester', name:'Link Parity Tester', category:'Fiber / Patch Cord Testing', summary:'Optical link parity and consistency verification for production and quality control.', image:images.fiber, representativeImage:true },
  { slug:'cmpa-2020c', model:'CMPA 2020C', name:'MPO / PLC Test System', category:'Fiber / Patch Cord Testing', summary:'Automated MPO and PLC optical test platform for manufacturing environments.', image:images.fiber },
  { slug:'7460b', model:'7460B', name:'Optical Pulse Backreflection Meter', category:'Fiber / Patch Cord Testing', summary:'Pulse-based backreflection measurement for fiber assemblies.', image:images.fiber, representativeImage:true },
  { slug:'7420b', model:'7420B', name:'Back Reflection Test Meter', category:'Fiber / Patch Cord Testing', summary:'Back reflection measurement for optical components and assemblies.', image:images.fiber, representativeImage:true },
  { slug:'wdm-test-system', model:'WDM Test System', name:'WDM Test System', category:'WDM Test Equipment', summary:'Production and R&D test platform for WDM optical devices.', image:images.wdm, representativeImage:true },
  { slug:'customized-power-meter', model:'Customized Power Meter', name:'Customized Optical Power Meter', category:'WDM Test Equipment', summary:'Application-specific optical power measurement configuration.', image:images.wdm, representativeImage:true },
  { slug:'7220b', model:'7220B', name:'LAN WDM Laser Source', category:'WDM Test Equipment', summary:'Laser source for LAN-WDM measurement applications.', image:images.wdm, representativeImage:true },
  { slug:'7228b', model:'7228B', name:'Laser Source', category:'WDM Test Equipment', summary:'Bench laser source for optical testing.', image:images.wdm, representativeImage:true },
  { slug:'7320b', model:'7320B', name:'Desktop Power Meter', category:'WDM Test Equipment', summary:'Desktop optical power measurement instrument.', image:images.wdm, representativeImage:true },
  { slug:'7240b-ase', model:'7240B ASE', name:'ASE Broadband Source', category:'WDM Test Equipment', summary:'ASE broadband optical source for wavelength-dependent testing.', image:images.wdm, representativeImage:true },
  { slug:'7240b-tunable', model:'7240B Tunable', name:'Wavelength Tunable Laser Source', category:'WDM Test Equipment', summary:'Tunable laser source for wavelength-dependent measurements.', image:images.wdm, representativeImage:true },
  { slug:'7250b', model:'7250B', name:'SLED Broadband Source', category:'WDM Test Equipment', summary:'SLED broadband optical source.', image:images.wdm, representativeImage:true },
  { slug:'7330c', model:'7330C', name:'Desktop Power Meter', category:'PLC / Splitter Testing', summary:'Desktop optical power measurement for splitter testing.', image:images.fiber, representativeImage:true },
  { slug:'7430c', model:'7430C', name:'PLC Test Meter', category:'PLC / Splitter Testing', summary:'PLC and splitter-focused optical test meter.', image:images.fiber, representativeImage:true },
  { slug:'8219', model:'8219', name:'8-Channel FTTR ER Tester', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'Multi-channel extinction-ratio testing for FTTR production.', image:images.onu, representativeImage:true },
  { slug:'onu-turnkey-solution', model:'ONU Turnkey Solution', name:'ONU XGS-PON / GPON / FTTR Turnkey Solution', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'Integrated manufacturing test solution for ONU, ONT and FTTR products.', image:images.onu, representativeImage:true },
  { slug:'bob-test-system', model:'BOB Test System', name:'BOSA On-Board Test System', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'BOSA-on-board calibration and optical verification platform.', image:images.onu, representativeImage:true },
  { slug:'c2000', model:'C2000', name:'RF Power Meter', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'RF power measurement for production integration.', image:images.onu, representativeImage:true },
  { slug:'10gbert8', model:'10GBERT8', name:'Dual Channel Bit Generator', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'Dual-channel high-speed bit generation for optical test.', image:images.onu, representativeImage:true },
  { slug:'c2500-svoa8', model:'C2500-SVOA8', name:'Variable Optical Attenuator', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'Multi-channel variable optical attenuation for automated test systems.', image:images.onu, representativeImage:true },
  { slug:'c2500-opm16', model:'C2500-OPM16', name:'16-Channel Optical Power Meter', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'16-channel optical power measurement platform.', image:images.onu, representativeImage:true },
  { slug:'c4000-opm64', model:'C4000-OPM64', name:'64-Channel Optical Power Meter', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'64-channel optical power measurement platform for high-density production.', image:images.onu, representativeImage:true },
  { slug:'8218', model:'8218', name:'ER Tester', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'Extinction-ratio measurement instrument for optical production test.', image:images.onu, representativeImage:true },
  { slug:'optix4000', model:'OptiX4000', name:'Optical Test Platform', category:'BOB / ONU / GPON / XGS-PON / FTTR', summary:'Modular optical test platform for integrated production systems.', image:images.onu },
  { slug:'fi2100b', model:'FI2100B', name:'Handheld Fiber Inspector', category:'Handheld Fiber Instruments', summary:'Portable fiber connector inspection instrument.', image:images.handheld, representativeImage:true },
  { slug:'h2310b', model:'H2310B', name:'Handheld Optical Power Meter', category:'Handheld Fiber Instruments', summary:'Portable optical power meter for field and service use.', image:images.handheld, representativeImage:true },
  { slug:'h2420b', model:'H2420B', name:'Handheld Reflection Test Meter', category:'Handheld Fiber Instruments', summary:'Portable optical reflection measurement instrument.', image:images.handheld, representativeImage:true },
  { slug:'h3310b', model:'H3310B Series', name:'Handheld PON Optical Power Meter', category:'Handheld Fiber Instruments', summary:'Portable PON optical power measurement for access-network applications.', image:images.handheld, representativeImage:true },
  { slug:'h3100b', model:'H3100B', name:'Handheld OTDR', category:'Handheld Fiber Instruments', summary:'Handheld OTDR for fiber installation, service and troubleshooting.', image:images.handheld },
  { slug:'c2500-2g5bert8', model:'C2500-2G5BERT8', name:'Bit Error Generator', category:'Optical Module / Transceiver Test', summary:'Bit-error generation platform for optical module testing.', image:images.transceiver, representativeImage:true },
  { slug:'c2500-10gbert8', model:'C2500-10GBERT8', name:'Dual Channel Bit Generator', category:'Optical Module / Transceiver Test', summary:'Dual-channel bit generator for 10G optical module test.', image:images.transceiver, representativeImage:true },
  { slug:'8610b', model:'8610B', name:'Multi-Channel Bit Generator', category:'Optical Module / Transceiver Test', summary:'Multi-channel bit generation for optical transceiver production testing.', image:images.transceiver },
  { slug:'7604b', model:'7604B', name:'Variable Attenuator', category:'Optical Module / Transceiver Test', summary:'Variable optical attenuation for automated transceiver testing.', image:images.transceiver, representativeImage:true },
  { slug:'c2500-svoa', model:'C2500-SVOA', name:'Variable Optical Attenuator', category:'Optical Module / Transceiver Test', summary:'Variable optical attenuator for modular production test systems.', image:images.transceiver, representativeImage:true },
  { slug:'7510b', model:'7510B', name:'Desktop Optical Switch', category:'Optical Module / Transceiver Test', summary:'Desktop optical switching for automated test routing.', image:images.transceiver, representativeImage:true }
];

export const commpolarCategories = [...new Set(commpolarProducts.map(p => p.category))];

export type ShieldBox = {
  slug: string;
  model: string;
  type: 'Manual' | 'Pneumatic';
  summary: string;
  image: string;
  representativeImage?: boolean;
};

export const shieldBoxes: ShieldBox[] = [
  { slug:'jc-pb71676', model:'JC-PB71676', type:'Manual', summary:'Manual RF shield box for development, validation and production wireless testing.', image:'/assets/jiachen-products/jc-pb71676.svg' },
  { slug:'jc-pb71444-01', model:'JC-PB71444-01', type:'Manual', summary:'Manual RF shield box for bench and production test fixtures.', image:'/assets/shield-sprite.webp', representativeImage:true },
  { slug:'jc-pz31322', model:'JC-PZ31322', type:'Manual', summary:'Compact manual RF isolation enclosure for wireless DUT testing.', image:'/assets/shield-sprite.webp', representativeImage:true },
  { slug:'jc-pb31443-01', model:'JC-PB31443-01', type:'Manual', summary:'Manual shielded enclosure for RF validation and production use.', image:'/assets/jiachen-products/jc-pb31443-01.svg' },
  { slug:'jc-pb33655', model:'JC-PB33655', type:'Pneumatic', summary:'Pneumatic RF shield box for repeatable automated manufacturing test.', image:'/assets/jiachen-products/jc-pb33655.svg' },
  { slug:'jc-pb33443-04', model:'JC-PB33443-04', type:'Pneumatic', summary:'Pneumatic shielded enclosure for higher-throughput RF test stations.', image:'/assets/jiachen-products/jc-pb33443-04.svg' }
];

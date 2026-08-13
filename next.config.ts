import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/products.html', destination: '/products', permanent: true },
      { source: '/solutions.html', destination: '/solutions', permanent: true },
      { source: '/rf-calibration.html', destination: '/rf-calibration', permanent: true },
      { source: '/commpolar.html', destination: '/commpolar', permanent: true },
      { source: '/shield-boxes.html', destination: '/shield-boxes', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/contact-form.html', destination: '/contact', permanent: true }
    ];
  }
};

export default nextConfig;

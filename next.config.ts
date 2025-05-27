
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'ebrandpromotion.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'ugem-production.s3.amazonaws.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'www.hubspot.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'images-wixmp-530a50041672c69d335ba4cf.wixmp.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'weandthecolor.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'ibb.co',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
      { // Add this new entry for ebrandpromotion.com
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        port: '', // Keep port as '' if no specific port is needed
        pathname: '/**', // Allow all paths on this hostname
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'ik.imagekit.io',
              pathname: '/jkmgqwabx/**',
            },
        ]
     }
}

module.exports = nextConfig

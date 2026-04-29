/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // This applies the security header to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            // 1 year (31,536,000 seconds) including all subdomains
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
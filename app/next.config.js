// /**
//  * @type {import('next').NextConfig}
//  */

module.exports = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "api",
        hostname: "103.76.129.90",
        port: "48666",
        pathname: "/api/v1/img/*",
      }
    ],
  },
};

// /**
//  * @type {import('next').NextConfig}
//  */

module.exports = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backendwppdev.my.id",
        pathname: "/api/v1/img/*",
      }
    ],
  },
};

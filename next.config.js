const withPWA = require("next-pwa");
// import withPWA from "next-pwa";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

// module.exports = nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["snip.com.ua"]
  },
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Makes SVG more easily sizeable
            typescript: true
          }
        }
      ]
    });

    return config;
  }
};

export default withNextIntl(nextConfig);

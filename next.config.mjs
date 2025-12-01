/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "crm.intersmarthosting.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "/**",
      },
    ],
  },
  
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
              "frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/",
              "style-src 'self' 'unsafe-inline' https://www.gstatic.com/recaptcha/",
              "connect-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
              "img-src 'self' data: https://www.gstatic.com/recaptcha/",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /pdf\.worker(\.min)?\.js$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[contenthash].[ext]",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
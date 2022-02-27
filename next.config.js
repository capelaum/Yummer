module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  env: {
    url_local: "http://localhost:3000",
    url_dev: "https://yummer.vercel.app",
    url_prod: "http://yummer.com.br",
  },
  images: {
    domains: ["yummer.vercel.app"],
  },
};

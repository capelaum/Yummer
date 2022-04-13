module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  env: {
    url_local: "http://localhost:3000",
    url_dev: "http://localhost:3000",
    url_prod: "http://yummer.com.br",
  },
  images: {
    domains: ["yummer.vercel.app"],
  },
};

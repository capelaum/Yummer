module.exports = {
  reactStrictMode: true,
  env: {
    url_local: "http://localhost:3000",
    url_prod: "http://yummer.com.br",
  },
  experimental: {
    styledComponents: true,
  },
  swcMinify: true,
  serverComponents: true,
};

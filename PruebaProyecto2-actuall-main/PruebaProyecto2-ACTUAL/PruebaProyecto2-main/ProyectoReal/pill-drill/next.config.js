/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/InicioSesion', // Cambia 'mainPage' por la ruta de tu nueva página
        permanent: true,
      },
    ];
  },
};

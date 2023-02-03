const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    images: {
      domains: ['fysjbpwpllgjckgtvdqx.supabase.co'],
    },
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
);

module.exports = nextConfig;

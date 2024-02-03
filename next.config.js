/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  // 国際化
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  // 画像の最適化
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

export default config;

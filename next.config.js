/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["en", "jp", "id"],
        defaultLocale: "en",
        localeDetection: true
    }
}

module.exports = nextConfig

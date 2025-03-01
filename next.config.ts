import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = { images: { domains: ["picsum.photos"] } }

export default withNextIntl(nextConfig)
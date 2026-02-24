import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    additionalData: `@use "@/styles/variables" as *;`,
  },
  serverExternalPackages: ["typeorm", "pg", "maxmind", "reflect-metadata"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Suppress TypeORM warnings for optional drivers not used in this project
      config.ignoreWarnings = [
        { module: /typeorm/ },
      ]
    }
    return config
  },
}

export default withNextIntl(nextConfig)

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8000",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "**",
                port: "",
            },
        ],
        imageSizes: [
            16, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 2048, 4096,
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		loader: "custom",
		loaderFile: "./my/image/loader.js",
	},
};

module.exports = nextConfig;

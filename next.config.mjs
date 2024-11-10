/** @type {import('next').NextConfig} */

import withSvgr from "next-svgr"

export default withSvgr({
	distDir: "./dist", // Changes the build output directory to `./dist/`.
	compiler: {
		styledComponents: true
	}
})
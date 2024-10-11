import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	define: {
		"process.env": process.env
	},
	plugins: [react()]
})

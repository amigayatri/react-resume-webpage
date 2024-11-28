const device = {
	xs: 400,
	sm: 600,
	md: 900,
	lg: 1280,
	xl: 1440,
	xxl: 1920
}

type isMobile = (windowWidth: number) => boolean
const isMobile: isMobile = (windowWidth) => {
	return windowWidth <= device.md
}

type devices = "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
type getCurrDevice = (windowWidth: number) => devices

const getCurrDevice: getCurrDevice = (windowWidth) => {
	if (windowWidth <= device.xs) {
		return "xs"
	} else if (windowWidth <= device.sm) {
		return "sm"
	} else if (windowWidth <= device.md) {
		return "md"
	} else if (windowWidth <= device.lg) {
		return "lg"
	} else if (windowWidth <= device.xl) {
		return "xl"
	} else {
		return "xxl"
	}
}

export { isMobile, getCurrDevice }

"use-client"

const device = {
	xs: 400,
	sm: 600,
	md: 900,
	lg: 1280,
	xl: 1440,
	xxl: 1920
}

export const media = {
	max: {
		xs: `@media (max-width: ${device.xs - 1}px) `,
		sm: `@media (max-width: ${device.sm - 1}px) `,
		md: `@media (max-width: ${device.md - 1}px) `,
		lg: `@media (max-width: ${device.lg - 1}px) `,
		xl: `@media (max-width: ${device.xl - 1}px) `,
		xxl: `@media (max-width: ${device.xxl - 1}px) `
	},
	min: {
		xs: `@media (min-width: ${device.xs}px) `,
		sm: `@media (min-width: ${device.sm}px) `,
		md: `@media (min-width: ${device.md}px) `,
		lg: `@media (min-width: ${device.lg}px) `,
		xl: `@media (min-width: ${device.xl}px) `,
		xxl: `@media (min-width: ${device.xxl}px) `
	},
	print: `@media print `
}

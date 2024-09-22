export default interface PageProps {
	path: string
	element: ({ page }: { page: PageProps }) => JSX.Element
	id: string
	isHome: boolean
	icon: string
}

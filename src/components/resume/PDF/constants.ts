import { Styles } from "@alexandernanberg/react-pdf-renderer"

export const pngMapping = new Map([
	["website", "/contacts-pdf/website.png"],
	["phone", "/contacts-pdf/phone.png"],
	["email", "/contacts-pdf/email.png"],
	["linkedin", "/contacts-pdf/linkedin.png"]
])
export const darkStyle: Styles = {
	page: {
		backgroundColor: "#212117",
		color: "#f7f7f7",
		textAlign: "left",
		padding: "24px 32px"
	},
	section: {
		color: "#f7f7f7",
		fontSize: "15px",
		fontFamily: "FiraMono",
		margin: "0 0 12px"
	},
	title: {
		color: "#67d8ef",
		fontSize: "30px",
		fontFamily: "FiraMono",
		lineHeight: "1"
	},
	item: {
		fontSize: "15px",
		margin: "4px 0"
	},
	subitem: {
		fontFamily: "FiraMono",
		fontSize: "13px",
		margin: "4px 0 0"
	},
	job: {
		color: "#f92472",
		fontSize: "21px",
		fontStyle: "normal",
		fontFamily: "Helvetica-Oblique",
		marginBottom: "9px"
	},
	sectionTitle: {
		fontFamily: "FiraMono",
		fontSize: "18px",
		color: "#67d8ef",
		marginBottom: "8px"
	},
	contacts: {
		display: "flex",
		flexDirection: "row",
		fontFamily: "FiraMono",
		alignItems: "center",
		justifyContent: "space-between",
		margin: "8px -8px 16px"
	},
	date: {
		fontFamily: "FiraMono",
		fontSize: "13px"
	},
	contact: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "13px"
	},
	contactLink: {
		textDecoration: "none",
		color: "#f7f7f7"
	},
	icon: {
		width: "16px",
		height: "16px",
		marginRight: "4px"
	}
}
export const lightStyle: Styles = {
	page: {
		backgroundColor: "#f7f7f7",
		color: "#212117",
		textAlign: "left",
		padding: "24px 32px"
	},
	section: {
		color: "#212117",
		fontSize: "15px",
		fontFamily: "FiraMono",
		margin: "0 0 12px"
	},
	title: {
		color: "#f92472",
		fontSize: "30px",
		fontFamily: "FiraMono",
		lineHeight: "1"
	},
	item: {
		fontSize: "15px",
		margin: "4px 0"
	},
	subitem: {
		fontFamily: "FiraMono",
		fontSize: "13px",
		margin: "4px 0 0"
	},
	job: {
		color: "#67d8ef",
		fontSize: "21px",
		fontStyle: "normal",
		fontFamily: "Helvetica-Oblique",
		marginBottom: "9px"
	},
	sectionTitle: {
		fontFamily: "FiraMono",
		fontSize: "18px",
		color: "#f92472",
		marginBottom: "8px"
	},
	contacts: {
		display: "flex",
		flexDirection: "row",
		fontFamily: "FiraMono",
		alignItems: "center",
		justifyContent: "space-between",
		margin: "8px -8px 16px"
	},
	date: {
		fontFamily: "FiraMono",
		fontSize: "13px"
	},
	contact: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "13px"
	},
	contactLink: {
		textDecoration: "none",
		color: "#212117"
	},
	icon: {
		width: "16px",
		height: "16px",
		marginRight: "4px"
	}
}

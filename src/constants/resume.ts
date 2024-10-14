import sections from "./sections"
import contacts from "./contacts"

const resume = {
	header: {
		name: "Amira Gayatri El Assad Hempel",
		job: {
			t: true,
			key: "resume.header.subheading"
		}
	},
	summary: {
		t: true,
		key: "resume.summary.text"
	},
	sections: {
		t: true,
		arr: sections
	},
	contacts: {
		t: false,
		arr: contacts
	}
}

export default resume

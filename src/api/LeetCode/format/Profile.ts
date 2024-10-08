interface Profile {
	username: string
	name: string
	country: string
	ranking: number
	birthday: Date
}

export const emptyProfile: Profile = {
	username: "",
	name: "",
	country: "",
	ranking: -1,
	birthday: new Date()
}

interface QueryResult {
	name: string
	username: string
	birthday: string
	ranking: number
	country: string
}

export const formatProfile = (rawData: QueryResult) => {
	const { name, birthday, ranking, country, username } = rawData
	return {
		username,
		name,
		country,
		ranking: Number(ranking),
		birthday: new Date(birthday)
	}
}

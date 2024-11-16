import { Profile } from "../../../types/leetcode"

interface QueryResult {
	name: string
	username: string
	birthday: string
	ranking: number
	country: string
}

type formatProfile = (raw: QueryResult) => Profile
export const formatProfile: formatProfile = (rawData: QueryResult) => {
	const { name, birthday, ranking, country, username } = rawData
	return {
		username,
		name,
		country,
		ranking: Number(ranking),
		birthday: new Date(birthday)
	}
}

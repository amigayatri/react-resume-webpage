const baseUrl = "https://leetcode-stats-api.herokuapp.com/"

const useGetLeetCodeData = async (username: string) => {
	const address = baseUrl.concat(username)
	const response = await fetch(address)
	const data = await response.json()
	return data
}

export default useGetLeetCodeData

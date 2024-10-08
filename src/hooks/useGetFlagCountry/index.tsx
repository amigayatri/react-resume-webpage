const useGetFlagCountry = async (countryName: string) => {
	const response = await fetch(
		`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
	)
	const [result] = await response.json()
	return result.flag
}

export default useGetFlagCountry

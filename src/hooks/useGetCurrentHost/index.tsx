export const useGetCurrentHost = () => {
	const env = process.env.NODE_ENV
	const currentHost =
		env === "development"
			? "http://localhost:3002"
			: "https://alfa-leetcode-api.onrender.com"

	return currentHost
}

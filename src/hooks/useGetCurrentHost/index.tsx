const useGetCurrentHost = () => {
    const currentHost = 
    import.meta.env.MODE === "development"?
        "http://localhost:3000":
        "https://alfa-leetcode-api.onrender.com/"

    return currentHost
}

export default useGetCurrentHost

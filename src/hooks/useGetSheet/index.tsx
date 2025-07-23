export const useGetSheet = async (sheetURL: string) => {
    const response = await fetch(sheetURL)
    const sheetText = await response.text()
    // console.log(sheetText)
    return sheetText
}

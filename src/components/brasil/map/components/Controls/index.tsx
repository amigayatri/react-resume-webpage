
import { ControlProps } from "../types.ts"
import { SelectDivision, SelectTheme } from "./components"
import { SelectsWrapper } from "./Controls.styled.ts"

export const Controls = ({ t, lng, controls, theme, changeDivision, updateParams }: ControlProps) => {
    // const handleChangeColors: handleChangeColors = (newColors, newInfo) => {
    //     if (newColors.length === 0) return
    //     setRawColors(newColors)
    //     let newContrast = contrast.value,
    //         newChecker = checker,
    //         newBg = theme.background
    //     if (typeof newInfo === "number") {
    //         newContrast = newInfo
    //     } else if (typeof newInfo === "string") {
    //         newBg = newInfo
    //     } else if (newInfo !== undefined) {
    //         newChecker = newInfo
    //         setChecker(newInfo)
    //     } else {
    //         return
    //     }
    //     const { primary } = theme
    //     const clean = newChecker.getCleanColors(newBg, newContrast)
    //     if (clean.length === 0) return [primary]
    //     setColors(clean)
    // }
    const handleTheme = (value: string) => {
		controls.updatePalette(value)
		updateParams()
    }
    const changeContrast = (newContrastStr: string) => {
        controls.updateContrast(newContrastStr)
		updateParams()
    }

    // let size = colors.length

    // useEffect(() => {
    //     handleChangeColors(rawColors, theme.background)
    // }, [theme.primary])
    // const emptyColors: string[] = []
    // const cleanSelected: NewInfo =
    //     selected === undefined ?
    //         {
    //             group: "rainbow",
    //             name: "rainbow monokai",
    //             colors: emptyColors
    //         }
    //     :   selected
    // return (
    //         <SelectsWrapper>
    //             <SelectTheme
    //                 selectStyle={selectStyle}
    //                 lng={lng}
    //                 t={t}
    //                 handleTheme={handleTheme}
    //                 changeContrast={handleChangeContrast}
    //                 selected={{ group: cleanSelected.group, name: cleanSelected.name }}
    //             />
    //         </SelectsWrapper>
    // )
    return (
        <SelectsWrapper>
            <SelectTheme
                changeContrast={changeContrast}
                selected={controls.palette}
                t={t}
                lng={lng}
                selectStyle={controls.generateSelectStyle(theme)}
				contrast={controls.contrast}
				controls={controls}
				handleTheme={handleTheme}
            />
            <SelectDivision
                selectStyle={controls.generateSelectStyle(theme)}
                changeDivision={changeDivision}
                defaultVal={controls.division}
                lng={lng}
                t={t}
            />
        </SelectsWrapper>
    )
}

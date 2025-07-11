import { MulticoloredName, SVGIcon } from "../../../../common/client"
import { ControlButtonProps, CopyButtonProps, DeleteButtonProps, PaletteControlProps, SortControlProps } from "../types"
import {
	ButtonWrapper,
	ControlWrapper,
	CopyPalette,
	SortWrapper
} from "./Control.styled"

const ControlButton = ({selected, onClick, lng, icon} : ControlButtonProps) => {
	return (
        <ButtonWrapper
            $selected={selected}
            onClick={onClick}
        >
            <SVGIcon lng={lng} local="palette" size={32} id={icon} />
        </ButtonWrapper>
    )
}

const SortControl = ({t, lng, sortedState, ascendingState}: SortControlProps) => {
	const [showSorted, setShowSorted] = sortedState
    const [ascending, setAscending] = ascendingState
	return (
        <SortWrapper>
            <ControlButton
                lng={lng}
                t={t}
                selected={!showSorted}
                icon="listunordered"
                onClick={() => {
                    setShowSorted(false)
                }}
            />
            <ControlButton
                lng={lng}
                t={t}
                selected={showSorted && ascending}
                icon="listsortedascending"
                onClick={() => {
                    setShowSorted(true)
                    if (!ascending) {
                        setAscending(true)
                    }
                }}
            />
            <ControlButton
                lng={lng}
                t={t}
                selected={showSorted && !ascending}
                icon="listsorteddescending"
                onClick={() => {
                    setShowSorted(true)
                    if (ascending) {
                        setAscending(false)
                    }
                }}
            />
        </SortWrapper>
    )
}

const CopyButton = ({t, lng, allCodes, info} : CopyButtonProps) => {
	return (
        <CopyPalette onClick={() => navigator.clipboard.writeText(allCodes)}>
            <MulticoloredName lng={lng} local="palette" iconId="copy" fontSize={16} legible info={info}>
                {t("info.copy all")}
            </MulticoloredName>
        </CopyPalette>
    )
}

const DeleteButton = ({ info, lng, remove}:DeleteButtonProps) => {
	return (
        <ButtonWrapper $selected={false} onClick={() => {
			const {group, name} = info
			remove(group, name)
		}}>
            <SVGIcon lng={lng} local="palette" size={32} id="trash" />
        </ButtonWrapper>
    )
}

export const Control = ({ lng, t, sortedState, ascendingState, allCodes, info, remove }: PaletteControlProps) => {

    return (
        <ControlWrapper>
			<SortControl lng={lng} t={t} ascendingState={ascendingState} sortedState={sortedState} />
			<DeleteButton lng={lng} t={t} info={info} remove={remove} />
			<CopyButton lng={lng} t={t} info={info} allCodes={allCodes} />
        </ControlWrapper>
    )
}

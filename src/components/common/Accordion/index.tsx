import { ElementProps } from "../../../types/common/"
import { AccordionButton, AccordionContent, AccordionWrapper } from "./Accordion.styled.ts"

export interface AccordionProps extends ElementProps {
	label: string
	children: React.ReactNode | string
	openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
	customColor?: string
	customBgColor?: string
}

export const Accordion = ({ label, children, openState, customBgColor, customColor }: AccordionProps) => {
    const [open, setOpen] = openState
    return (
        <AccordionWrapper $open={open} $bgColor={customBgColor} $color={customColor}>
            <AccordionButton
                onClick={() => {
                    setOpen(!open)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setOpen(!open)
                    }
                }}
                tabIndex={0}
            >
                {label}
            </AccordionButton>
            <AccordionContent>{children}</AccordionContent>
        </AccordionWrapper>
    )
}

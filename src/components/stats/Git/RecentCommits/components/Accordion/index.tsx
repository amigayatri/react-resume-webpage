import { Commit } from "../"
import { AccordionWrapper } from "./Accordion.styled"
import { AccordionProps } from "../../../types"

export const Accordion = ({ list, isOpen }: AccordionProps) => {
	return (
		<AccordionWrapper $isOpen={isOpen}>
			{list.map((commit, id) => (
				<Commit key={`commit-${id}`} info={commit} />
			))}
		</AccordionWrapper>
	)
}

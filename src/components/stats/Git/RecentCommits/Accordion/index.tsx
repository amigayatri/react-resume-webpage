import Commit from "../Commit"
import { AccordionWrapper } from "./Accordion.styled"

interface AccordionProps {
	list: any[]
	isOpen: boolean
}

const Accordion = ({ list, isOpen }: AccordionProps) => {
	return (
		<AccordionWrapper $isOpen={isOpen}>
			{list.map((commit, id) => (
				<Commit key={`commit-${id}`} info={commit} />
			))}
		</AccordionWrapper>
	)
}

export default Accordion

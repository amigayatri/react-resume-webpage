import { CityWrapper, Name, Quantity, Number } from "./City.styled"
import { CityProps } from "../types"

export const City = ({ name, qtty }: CityProps) => {
	const { thisYear, nextYear } = qtty
	return (
		<CityWrapper>
			<Name>{name}</Name>
			<Quantity>
				Este ano: <Number>{thisYear}</Number>
			</Quantity>
			<Quantity>
				Ano que vem: <Number>{nextYear}</Number>
			</Quantity>
		</CityWrapper>
	)
}

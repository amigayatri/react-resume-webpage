import {
	EyesContainer,
	FaceWrapper,
	Eyes,
	Smile,
	MouthWrapper,
	SadMouth
} from "./Face.styled"

interface FaceProps {
	isSad: boolean
}

export const Face = ({ isSad }: FaceProps) => {
	return (
		<FaceWrapper>
			<EyesContainer>
				<Eyes />
				<Eyes />
			</EyesContainer>
			<MouthWrapper>{isSad ? <SadMouth /> : <Smile />}</MouthWrapper>
		</FaceWrapper>
	)
}

import { ProfileWrapper, Name, Username, IDWrapper } from "./Profile.styled"
import SVGIcon from "../../../icons/SVGIcon"

interface ProfileProps {
	name: string
	profile: {
		ranking: number
		acceptanceRate: number
		username: string
	}
}

const Profile = ({ name, profile }: ProfileProps) => {
	return (
		<ProfileWrapper>
			<Name>{name}</Name>
			<IDWrapper
				rel="noopener"
				target="_blank"
				href={"http://leetcode.com/u/" + profile.username}
			>
				<Username>({profile.username})</Username>
				<SVGIcon id="external" size={24} />
			</IDWrapper>
		</ProfileWrapper>
	)
}

export default Profile

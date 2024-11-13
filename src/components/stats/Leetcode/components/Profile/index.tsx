import {
	ProfileWrapper,
	Name,
	Username,
	IDWrapper,
	FlagWrapper
} from "./Profile.styled"
import { SVGIcon } from "../../../../common/client"
import { useState, useEffect } from "react"
import { useGetFlagCountry } from "../../../../../hooks/"
import { linkProps } from "../../../../../constants/linkprops"
import { LeetCodeElementProps } from "../../types"
import { emptyProfile } from "../../../../../api/LeetCode"

export const Profile = ({ leetcode, lng }: LeetCodeElementProps) => {
	const [profile, setProfile] = useState(emptyProfile)
	const [flag, setFlag] = useState(" ")

	useEffect(() => {
		leetcode.getProfile().then((profile) => {
			setProfile(profile)
			useGetFlagCountry(profile.country).then((flag) => setFlag(flag))
		})
	}, [])
	return (
		<ProfileWrapper>
			<Name>{profile.name}</Name>
			<FlagWrapper>{flag}</FlagWrapper>
			<IDWrapper {...linkProps} href={"http://leetcode.com/u/" + profile}>
				<Username>({profile.username})</Username>
				<SVGIcon lng={lng} local="leetcode" id="external" size={24} />
			</IDWrapper>
		</ProfileWrapper>
	)
}

import {
	ProfileWrapper,
	Name,
	Username,
	IDWrapper,
	FlagWrapper
} from "./Profile.styled"
import { SVGIcon } from "../../../common/SVGIcon/client"
import { useState, useEffect } from "react"
import { empty } from "../../../../api/LeetCode"
import { LeetCodeProps } from "../../../../types/leetcode/"
import { useGetFlagCountry } from "../../../../hooks/"
import { linkProps } from "../../../../constants/linkprops"

export const Profile = ({ leetcode, lng }: LeetCodeProps) => {
	const [profile, setProfile] = useState(empty.profile)
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
import { IconItem, Id, IconWrapper, IconLink } from "./Icon.styled"
import { IconProps } from "../types"
import { SVGIcon } from "../../../common/client"

export const Icon = ({ id, lng, color, size }: IconProps) => {
	return (
		<IconItem>
			<IconLink href={`/${lng}/icons/${id}`}>
				id: <Id>{id}</Id>
				<IconWrapper
					$size={size}
					style={{
						color: color
					}}
				>
					<SVGIcon
						lng={lng}
						local="iconlist"
						id={id}
						size={48}
						responsive
					/>
				</IconWrapper>
			</IconLink>
		</IconItem>
	)
}
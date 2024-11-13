import {
	SelectInput,
	Option,
	SelectWrapper,
	Label,
	Group,
	SelectInputWrapper
} from "./Select.styled"
import { SelectBaseProps } from "./"
import { SVGIcon } from "../client.tsx"
import { useTheme } from "styled-components"

export const SelectBase = ({
	t,
	options,
	label,
	onHeader,
	id,
	fontSize,
	onSelectChange,
	customStyle,
	defaultValue,
	local,
	iconId,
	Button,
	lng
}: SelectBaseProps) => {
	const theme = useTheme()
	return (
		<SelectWrapper
			$customColors={customStyle}
			$fontSize={fontSize}
			$onHeader={onHeader}
		>
			<Label htmlFor={id}>{label}</Label>
			<SelectInputWrapper>
				{iconId !== undefined && (
					<SVGIcon
						color={
							customStyle !== undefined
								? customStyle.select.border
								: onHeader
								? theme.blue
								: theme.secondAccent
						}
						size={fontSize * 16}
						id={iconId}
						local={local}
						lng={lng}
					/>
				)}
				<SelectInput
					$hasButton={Button !== undefined}
					onChange={onSelectChange}
					id={id}
					defaultValue={defaultValue}
				>
					{defaultValue === "_" && (
						<Option key={id + "-option-" + "_"} value={"_"}>
							{" "}
						</Option>
					)}
					{options.map(({ groupKey, options }, idx) => {
						if (options.length === 0) return
						return (
							<Group
								key={id + "-optgroup-" + groupKey + "-option-" + idx}
								label={t(groupKey)}
							>
								{options.map(({ value, key, tOptions, extraText }) => (
									<Option key={id + "-option-" + value} value={value}>
										{t(
											key,
											tOptions !== undefined
												? { groupName: t(tOptions.groupName) }
												: undefined
										)}
										{extraText !== undefined ? extraText : ""}
									</Option>
								))}
							</Group>
						)
					})}
				</SelectInput>
				{Button !== undefined && Button}
			</SelectInputWrapper>
		</SelectWrapper>
	)
}

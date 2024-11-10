import { i18n, TFunction } from "i18next"
import {
	SelectInput,
	Option,
	SelectWrapper,
	Label,
	Group
} from "./Select.styled"
import { SelectProps } from "./index.tsx"

interface SelectBaseProps extends SelectProps {
	t: TFunction<any, undefined>
	i18n: i18n
}

export const SelectBase = ({
	t,
	options,
	labelKey,
	onHeader,
	id,
	fontSize,
	onSelectChange,
	customStyle,
	defaultValue
}: SelectBaseProps) => {
	return (
		<SelectWrapper
			$customColors={customStyle}
			$fontSize={fontSize}
			$onHeader={onHeader}
		>
			<Label htmlFor={id}>{t(labelKey)}</Label>
			<SelectInput
				onChange={onSelectChange}
				id={id}
				defaultValue={defaultValue}
			>
				{options.map(({ groupKey, options }, idx) => {
					if (options.length === 0) return
					return (
						<Group
							key={id + "-optgroup-" + groupKey + "-option-" + idx}
							label={t(groupKey)}
						>
							{options.map(({ value, key }) => (
								<Option key={id + "-option-" + value} value={value}>
									{t(key)}
								</Option>
							))}
						</Group>
					)
				})}
			</SelectInput>
		</SelectWrapper>
	)
}

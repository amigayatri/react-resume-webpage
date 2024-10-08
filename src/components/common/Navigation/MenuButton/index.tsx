import { MenuButtonWrapper, Icon } from "./MenuButton.styled"

interface MenuButtonProps {
	openMenu: () => void
	isOpen: boolean
}

const MenuButton = ({ openMenu, isOpen }: MenuButtonProps) => {
	return (
		<MenuButtonWrapper
			tabIndex={0}
			onKeyDown={(e) => e.key === "Enter" && openMenu()}
			onClick={() => openMenu()}
		>
			<Icon $isOpen={isOpen} />
		</MenuButtonWrapper>
	)
}

export default MenuButton

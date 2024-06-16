import { Ellipsis } from "@yamada-ui/lucide"
import { Icon } from "@yamada-ui/react"
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@yamada-ui/react"
import type { IconButtonProps, MenuProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import type { ModalType } from "."

export type ControlButtonProps = IconButtonProps & {
  menuProps?: MenuProps
  onOpen: (type: ModalType) => void
}

export const ControlButton: FC<ControlButtonProps> = memo(
  ({ menuProps, onOpen, ...rest }) => {
    return (
      <Menu {...menuProps}>
        <MenuButton
          as={IconButton}
          icon={<Icon as={Ellipsis} fontSize="1.3em" />}
          {...rest}
        />

        <MenuList>
          <MenuItem
            display={{ base: "none", lg: "flex" }}
            onClick={() => onOpen("save")}
          >
            Save
          </MenuItem>
          <MenuItem
            display={{ base: "none", lg: "flex" }}
            onClick={() => onOpen("viewCode")}
          >
            View code
          </MenuItem>
          <MenuItem onClick={() => onOpen("filter")}>
            Content filter preferences
          </MenuItem>
          <MenuItem color="danger" onClick={() => onOpen("delete")}>
            Delete preset
          </MenuItem>
        </MenuList>
      </Menu>
    )
  },
)

ControlButton.displayName = "ControlButton"

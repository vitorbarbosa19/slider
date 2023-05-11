import { MouseEvent, SyntheticEvent, ReactNode, HTMLAttributes, ReactElement, CSSProperties } from "react"

export type HandleClickType = (event: MouseEvent, onClick: (e: MouseEvent) => void) => void

export type OnDragStartType = (event: SyntheticEvent) => void

type ChildrenAsFunctionParams = {
  handleClick: HandleClickType
  onDragStart: OnDragStartType
}

type ChildrenAsFunction = ({ handleClick, onDragStart }: ChildrenAsFunctionParams) => ReactNode

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  /** conteudo do slider */
  children: ReactElement | ChildrenAsFunction
  /** estilo customizado do container */
  style?: CSSProperties
  /** estilo customizado do slider (motion.div) */
  styleSlider?: CSSProperties
}

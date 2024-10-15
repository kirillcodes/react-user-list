export type ButtonType = {
  text: string,
  type?: 'button' | 'submit' | undefined,
  isFavorite?: boolean,
  handleClick?: (e?: React.MouseEvent) => void,
}

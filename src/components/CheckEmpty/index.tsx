type Props = {
  condition?: boolean
  children?: JSX.Element | JSX.Element[]
}

export const CheckEmpty: React.FC<Props> = ({ condition, children }) => {
  return condition ? <>{children}</> : null
}

import { useEmotionCss } from '@ant-design/use-emotion-css'
import { useModel } from '@umijs/max'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const BuilderContainer: React.FC<Props> = ({ children }) => {
  const { layout } = useModel('layout')
  const { setSelectedElementId } = useModel('element')
  const { deviceType } = useModel('device')
  const className = useEmotionCss(({ token }) => ({
    width: '100%',
    height: 'initial',
    position: 'relative',
    ':after': {
      position: 'fixed',
      content: '""',
      top: 0,
      left: `calc((100% - ${layout?.container?.[deviceType]?.width}px) / 2)`,
      borderLeft: `1px dashed ${token.colorPrimary}`,
      width: 1,
      height: '100%',
    },
    ':before': {
      position: 'fixed',
      content: '""',
      top: 0,
      right: `calc((100% - ${layout?.container?.[deviceType]?.width}px) / 2)`,
      borderLeft: `1px dashed ${token.colorPrimary}`,
      width: 1,
      height: '100%',
    },
  }))
  const classNameChildren = useEmotionCss(() => ({
    width: '100%',
    height: 'calc(100vh - 56px)',
  }))

  return (
    <div
      className={className}
      onClick={(e) => {
        // NOTE: deselect element when click outside element
        e.stopPropagation()
        setSelectedElementId(undefined)
      }}
    >
      <div className={classNameChildren}>{children}</div>
    </div>
  )
}

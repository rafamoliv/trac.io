import { LoadingOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'
import { LoadingContent } from './Loading.style'

/**
 * Loading component for loader status
 */

interface LoadingProps {
  children?: ReactNode
  loading?: boolean
  size?: 'sm' | 'md' | 'bg'
}

export const Loading = ({ children, loading = true, size = 'md' }: LoadingProps) => {
  var iconSize = '24px'

  switch (size) {
    case 'sm':
      iconSize = '16px'
      break;
    case 'md':
      iconSize = '24px'
      break;
    case 'bg':
      iconSize = '32px'
      break;
    default:
      iconSize = '24px'
      break;
  }

  return <>
    {
      loading ?
        <LoadingContent>
          <LoadingOutlined style={{ fontSize: iconSize }} />
        </LoadingContent> :
        children
    }
  </>
}

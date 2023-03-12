import { ReactNode } from 'react'
import { LoadingContent } from './Loading.style'
import Lottie from 'react-lottie'
import { AnimationLoader } from '@/assets'

/**
 * Loading component for loader status
 */

interface LoadingProps {
  children?: ReactNode
  loading?: boolean
  size?: 'sm' | 'md' | 'bg'
}

export const Loading = ({ children, loading = true, size = 'md' }: LoadingProps) => {
  var dimension = 32

  switch (size) {
    case 'sm':
      dimension = 32
      break;
    case 'md':
      dimension = 68
      break;
    case 'bg':
      dimension = 125
      break;
    default:
      dimension = 32
      break;
  }

  return <>
    {
      loading ?
        <LoadingContent>
          <Lottie
            height={dimension}
            isClickToPauseDisabled={true}
            isPaused={false}
            isStopped={false}
            options={{
              loop: true,
              autoplay: true,
              animationData: AnimationLoader
            }}
            width={dimension}
          />
        </LoadingContent> :
        children
    }
  </>
}

import * as Avatar from '@radix-ui/react-avatar'
import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})
export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})
export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export interface AvatarContainerProps
  extends ComponentProps<typeof AvatarContainer> {}

export interface AvatarImageProps extends ComponentProps<typeof AvatarImage> {}

export interface AvatarFallbackProps
  extends ComponentProps<typeof AvatarFallback> {}

import styled, { css } from 'styled-components'
import { pxToRem } from '@/utils'

export const Container = styled.div``

/**
 * Card
 */

export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  `}
`

export const CardDetails = styled.div``

export const CardSpecifications = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacing[1]};
  `}
`

/**
 * Modal
 */

export const ModalContent = styled.div``

/**
 * Empty state
 */

export const EmptyContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${pxToRem(192)};
  width: 100%;
`

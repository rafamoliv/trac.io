import styled, { css } from 'styled-components'
import { pxToRem } from '@/utils'

export const Grid = styled.div`
  background-color: #f0f5f9;
  display: flex;
  min-height: 100vh;
`

export const IntroductionContainerGrid = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[2]};
  `}
`

export const IntroductionContent = styled.div`
  ${({ theme }) => css`
    background-color: #52616b;
    border-radius: ${theme.spacing[2]};
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: ${theme.spacing[4]};
    max-width: ${pxToRem(440)};
  `}

  @media (min-width: 992px) {
    display: flex;
  }
`

export const ChildrenContent = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacing[5]};
    width: 100%;
  `}
`

export const CarouselContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  `}
`

export const CarouselProfile = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacing[2]};
  `}
`

import styled, { css } from 'styled-components'

export const Container = styled.div``

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing[1]};
  `}
`

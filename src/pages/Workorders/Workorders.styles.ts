import styled, { css } from 'styled-components'

export const Container = styled.div``

export const TaskList = styled.li`
  list-style: none;
  ${({ completed }: { completed: boolean }) =>
    completed &&
    css`
      opacity: 0.5;
      text-decoration: line-through;
    `}
`

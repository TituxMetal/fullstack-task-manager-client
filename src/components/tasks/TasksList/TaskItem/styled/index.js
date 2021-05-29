import styled from 'styled-components'

export const Task = styled.p`
  color: ${({ completed, theme }) =>
    completed ? theme.darkGoldenrod : theme.paleGoldenrod};
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  text-decoration: ${({ completed }) => completed && 'line-through'};
`

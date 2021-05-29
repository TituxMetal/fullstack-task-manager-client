import styled from 'styled-components'

export const Icon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 0 0.25rem;
  padding: 0.3rem;
  height: 2rem;
  width: 2rem;
  color: ${({ theme, color }) => theme[color]};
`

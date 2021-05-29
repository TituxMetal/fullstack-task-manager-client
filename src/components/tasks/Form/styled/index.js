import styled from 'styled-components'

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 1.4rem;
  flex-grow: 1;
  margin: 1rem;
  margin-right: 0;
  padding: 0 0 0.25rem 0;
  width: 10%;
`

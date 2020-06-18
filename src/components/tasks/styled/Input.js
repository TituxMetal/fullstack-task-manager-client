import styled from 'styled-components'

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.textColor};
  color: ${props => props.theme.textColor};
  font-size: 1.4rem;
  flex-grow: 1;
  margin: 1rem;
  margin-right: 0;
  padding: 0 0 0.25rem 0;
  width: 10%;
`

export default Input

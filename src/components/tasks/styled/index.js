import styled from 'styled-components'

export const Box = styled.section`
  background-color: ${({ theme }) => theme.blackAlpha3};
  border: 2px dashed ${props => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;
`

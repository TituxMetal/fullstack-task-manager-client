import styled from 'styled-components'

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.textColor};
  font-size: 0.8rem;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`

export default Footer

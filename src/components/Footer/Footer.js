import React from 'react'
import styled from 'styled-components'

const Text = styled.p``

const Wrapper = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.blackAlpha3};
  color: ${({ theme }) => theme.textColor};
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  max-width: 100vw;
`

const Footer = () => (
  <Wrapper>
    <Text>Created with love by TituxMetal</Text>
  </Wrapper>
)

export default Footer

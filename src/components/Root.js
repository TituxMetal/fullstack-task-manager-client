import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`

const Root = () => <Title>Root component</Title>

export default Root

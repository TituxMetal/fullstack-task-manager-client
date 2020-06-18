import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Brand = styled.section`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`

export const BrandLink = styled(Link)`
  color: ${({ theme }) => theme.darkGoldenrod};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`

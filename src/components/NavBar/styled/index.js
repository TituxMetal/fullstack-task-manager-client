import { Link, NavLink } from 'react-router-dom'
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

export const Li = styled.li`
  padding: 0 0.5rem;
  width: auto;
`

export const NavContainer = styled.section`
  background-color: ${({ theme }) => theme.blackAlpha3};
  padding: 0.5rem 1rem;
  width: 100%;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 980px) {
    margin: auto;
    max-width: 800px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 980px;
  }
`

export const NavItems = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  padding: 0;
`

export const LinkItem = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.paleGoldenrod};
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 0 0.5rem;
  position: relative;
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.whisper};

    &::after {
      background-color: ${({ theme }) => theme.darkGoldenrod};
      transform: scaleX(1);
    }

    &:hover {
      color: ${({ theme }) => theme.paleGoldenrod};

      &::after {
        background-color: ${({ theme }) => theme.darkGoldenrod};
      }
    }
  }

  &::after,
  &::before {
    content: '';
    background-color: ${({ theme }) => theme.darkGoldenrod};
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: transform 0.2s;
    width: 100%;
  }

  &::after {
    bottom: 0;
    transform-origin: right;
  }

  &::before {
    top: 0;
    transform-origin: left;
  }

  &:hover {
    color: ${({ theme }) => theme.paleGoldenrod};

    &::after {
      transform: scaleX(1);
    }
  }
`

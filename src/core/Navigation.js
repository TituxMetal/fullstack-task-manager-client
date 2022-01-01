import React from 'react'
import { NavLink } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

const activeLink = tw`[&.active]:(text-secondary
  after:(bg-secondary transform scale-x-100)
  hocus:(text-primary
    after:(bg-primary)))`
const Nav = styled.nav(tw`flex flex-1 justify-end items-center`)
const NavItem = styled.span(() => [
  tw`py-1.5 px-1.5 mx-1 font-bold text-white relative`,
  tw`hocus:(text-secondary after:(bg-secondary transform scale-x-100))`,
  tw`after:(block h-0.5 absolute bottom-0 left-0 origin-left transform scale-x-0 w-full ease-in-out duration-500)`,
  activeLink
])

const Navigation = () => (
  <Nav>
    <NavItem as={NavLink} to='/'>
      Home
    </NavItem>
    <NavItem as={NavLink} to='/about'>
      About
    </NavItem>
  </Nav>
)

export default Navigation

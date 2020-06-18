import React from 'react'

import { Brand, BrandLink, Li, LinkItem, Nav, NavItems, NavContainer } from '~/components/Main'

const Menu = () => (
  <NavContainer>
    <Nav>
      <Brand>
        <BrandLink to='/'>Task Manager</BrandLink>
      </Brand>
      <NavItems>
        <Li>
          <LinkItem to='/' exact>
            Home
          </LinkItem>
        </Li>
        <Li>
          <LinkItem to='/about'>
            About
          </LinkItem>
        </Li>
      </NavItems>
    </Nav>
  </NavContainer>
)

export default Menu

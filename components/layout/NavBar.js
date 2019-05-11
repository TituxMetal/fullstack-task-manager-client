import styled from 'styled-components'

import ActiveLink from '../ActiveLink'

const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin-right: 0.5rem;
      padding: 0.5rem;
      color: palegoldenrod;
      text-decoration: none;
      &.active {
        color: ${props => props.theme.secondaryColor};
        &:after {
          content: '';
          display: block;
          width: calc(100% + 8px);
          height: 3px;
          background-color: darkgoldenrod;
          margin-top: -3px;
          margin-left: -4px;
        }
      }
      &:hover {
        color: lightgoldenrodyellow;
      }
    }
  }

  .brand a {
    font-weight: bold;
    font-size: 1.4rem;
    margin-left: 0.5rem;
    color: darkgoldenrod;
    text-decoration: none;
  }
`

export default () => (
  <NavBar>
    <div className='brand'>
      <ActiveLink href='/'>
        <a>Task Manager</a>
      </ActiveLink>
    </div>
    <section>
      <ActiveLink href='/'>
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href='/about'>
        <a>About</a>
      </ActiveLink>
    </section>
  </NavBar>
)

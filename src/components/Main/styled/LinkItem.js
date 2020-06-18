import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LinkItem = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.paleGoldenrod};
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 0 .5rem;
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

export default LinkItem

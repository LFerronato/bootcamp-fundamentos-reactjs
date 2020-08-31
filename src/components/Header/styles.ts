import styled from 'styled-components'

interface ContainerProps {
  size?: 'small' | 'large'
}
interface NavItemProps {
  activated: 'a' | 'i'
}
export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;
  min-width: 90vw;

  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      div {
        & + div {
          margin-left: 32px;
        }
      }
    }
  }
`
export const NavItem = styled.div<NavItemProps>`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.2s;
    padding: 10px;
    border-bottom: ${({ activated }) =>
      activated === 'i' ? '0' : '2px solid #FF872C'};

    &:hover {
      opacity: 0.6;
    }
  }
`

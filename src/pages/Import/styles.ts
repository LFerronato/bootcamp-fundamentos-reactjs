import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  min-width: 500px;
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`

export const FileItemContainer = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    border-left: 1px solid #9994;
    padding-left: 3px;

    & + li {
      margin-top: 15px;
    }
  }
`

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`

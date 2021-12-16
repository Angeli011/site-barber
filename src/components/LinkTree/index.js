import React from "react";
import styled from 'styled-components';
import links from '../../../links.json';
import ButtonPd from "../buttonPd";

export const Container = styled.section`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 180px;
    display: block;
    margin: 70px auto;
    margin: 
  }

  a {
    margin: 10px 0;
    button {
      width: 400px;
    }
  }

  @media (max-width: 500px) {
    a {
      button {
        width: 230px;
      }
    }
  }
`

export default function LinkTree() {
  return (
    <Container>
      <img src="/img/primary.png" alt="Zero27 Logo" />
      {
        links.map((link, index) => {
          return (
            <a target="_blank" key={`link-${index}`} href={link.href} rel="noopener noreferrer">
              <ButtonPd>{ link.name }</ButtonPd>
            </a>
          )
        })
      }
    </Container>
  )
}
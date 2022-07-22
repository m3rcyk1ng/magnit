import styled from "styled-components";

export const Container = styled.div`
  width: var(--container-width-lg);
  margin: 7.5rem 2rem 0;
  display: flex;
  flex-direction: column;
  
  //& > h1, h2, h5 {
  //  text-align: left;
  //}
  
  @media screen and (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;
import styled from 'styled-components';

export const VacancyContainer = styled.div`
  display: grid;
  gap: 7em 12em;
  grid-template-columns: repeat(2, calc(50vw - 30px - 7em));
  grid-template-rows: repeat(2, min-content);
  margin-bottom: 7.5em;
  padding-right: 30px;
  
  @media (max-width: 1800px) {
    gap: 6em 7em;
  }

  @media (max-width: 1475px) {
    gap: 5em 6em;
  }

  @media (max-width: 1400px) {
    gap: 5em;
  }
  
  @media (max-width: 1260px) {
    gap: 5em;
    grid-template-columns: repeat(1, calc(100vw - 30px - 7em));
    grid-template-rows: repeat(min-content);
  }

  @media (max-width: 640px) {
    padding-right: 0;
    justify-content: center;
  }
`;

export const VacanciesTitle = styled.h2`
  @media (max-width: 1600px) {
    font-size: 3rem;
  }

  @media (max-width: 1250px) {
    margin: 0 auto 3rem;
  }
  `;
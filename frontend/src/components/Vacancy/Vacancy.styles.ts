import styled from 'styled-components';

export const VacancyContainer = styled.div`
  display: grid;
  gap: 7em 12em;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);
  margin-bottom: 7.5em;
  padding-right: 30px;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
`

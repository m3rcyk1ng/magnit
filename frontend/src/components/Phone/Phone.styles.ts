import styled from 'styled-components';

export const PhoneContainer = styled.div`
  display: none;

  @media (max-width: 899px) {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`;

export const PhoneButton = styled.button<{ mainPage: boolean }>`
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  svg {
    path {
      fill: ${(props) => (props.mainPage ? '#FFFFFF' : '#022346')};
    }
  }
`;

export const PhoneNumber = styled.a<{ mainPage: boolean; isNumberVisible: boolean }>`
	display: ${(props) => (props.isNumberVisible ? 'flex' : 'none')};
  opacity: ${(props) => (props.isNumberVisible ? 1 : 0)};
	transition: all .2s ease-in;
  font-size: 16px;
  line-height: 1.22;
  font-weight: 700;
  margin-left: 10px;
  color: ${(props) => (props.mainPage ? '#FFFFFF' : '#022346')};
`;

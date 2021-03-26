import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    text: '#ffffff',
    textDim: '#AFBDD2',
    primaryBG: '#1c1b29',
    secondaryBG: '#343756',
    inputBG: '#252436',
    primaryLink: '#039BE5',
    primaryLHover: '#038cce',
    secondaryLink: '#242436',
    secondaryLHover: '#202031',
    blurple: '#7289DA',
    blurpleHover: '#677bc4',
    almostBlurple: '#9DB7FB',
    red: '#D9436B',
    green: '#32A278',
  },
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.primaryBG};
    color: ${props => props.theme.colors.text};
    font-family: 'Whitney', sans-serif;
  };

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  };
`;

export const LinkStyle = styled.a`
  letter-spacing: .5px;
  color: ${props => props.theme.colors.primaryLink};
  &:hover {
    color: ${props => props.theme.colors.primaryLHover};
  }
`;

export const ButtonStyle = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;

export const H1Style = styled.h1`
  font-size: 3rem;
  letter-spacing: .5px;
`;

export const InputWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.inputBG};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.inputBG};

  ${state => !!state.err ? `
    border: 1px solid ${props => props.theme.colors.red};
  `: ``}
`;

export const InputStyle = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.inputBG};
  outline: none;
  border: none;
  font-size: 16px;
  color: ${props => props.theme.colors.textDim};
  padding: 14px;

  ${props => !!props.str ? `
      padding: 12px 0 12px 14px;
    ` : ``}
  &::placeholder {
    color: ${props => props.theme.colors.textDim};
  }
`;

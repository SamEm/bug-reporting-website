import styled, { keyframes } from 'styled-components';
import { ButtonStyle, H1Style } from '../utils/theme';
const Selection = ({reference}) => {
  return (
    <section ref={reference}>
      <SVGTop version="1.1"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <Path
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="#343756"></Path>
      </SVGTop>
      <Container>
        <H1>What Bot Command do you want to use?</H1>
        <Div>
          <Button>I want to report a new bug!</Button>
          <Button>I want to edit my report!</Button>
        </Div>
      </Container>
      <SVGBottom version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
        preserveAspectRatio="none">
        <Path 
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="#343756"></Path>
      </SVGBottom>
    </section>
  )
}

export default Selection;

const Waves = keyframes`
  0% {
    d: path(
      "M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
    );
  }
  50% {
    d: path(
      "M655.558582,28.4898877 C500.191373,61.6062216 422.833785,83.5422763 266.940085,49.8995879 C112.480383,16.5663637 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,49.8995879 C1580.91676,-34.8808285 1438.10804,73.6768193 1148.0266,38.0019829 C857.945166,2.32714659 810.925791,-4.62644617 655.558582,28.4898877 Z"
    );
  }
  to {
    d: path(
      "M842.322034,38.0019829 C686.954825,71.1183168 623.386282,53.08497 467.492582,19.4422816 C313.032879,-13.8909426 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,76.8685643 C1512.23604,-35.3595639 1568.70222,67.4289432 1278.62078,31.7541069 C988.539347,-3.92072949 997.689243,4.88564905 842.322034,38.0019829 Z"
    );
  }
`;

const SVGTop = styled.svg`
  margin-bottom: -5px;
`;

const SVGBottom = styled.svg`
  margin-bottom: 0;
  transform: rotate(180deg) translateY(1px);
`;

const Path = styled.path`
  -webkit-animation: ${Waves} 20s linear infinite alternate;
  animation: ${Waves} 20s linear infinite alternate;
`;

const Container = styled.div`
  height: 500px;
  background: ${props => props.theme.colors.secondaryBG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const H1 = styled(H1Style)`
  color: ${props => props.theme.colors.almostBlurple};
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Button = styled(ButtonStyle)`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  letter-spacing: 1px;
  border-radius: 30px;
  padding: 15px 50px;
  background-color: ${props => props.theme.colors.secondaryLink};
  transition: all .2s ease;

  &:hover {
    box-shadow: 0px 8px 10px -10px rgba(0,0,0,0.5);
    background-color: ${props => props.theme.colors.secondaryLHover};
  }
`;
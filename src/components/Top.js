import styled from 'styled-components';
import SVGs from './SVGs';
import { ButtonStyle, LinkStyle, H1Style } from '../utils/theme';
import Icon from '../assets/logo.svg';

const Top = ({reference, click}) => {

  return (
    <TopSection ref={reference}>
      <SVGs />
      <Container>
        <Logo src={Icon}/>
        <H1>Discord Bug Reporting Tool</H1>
        <Span>Ready to report a bug to <Link href="">Discord Testers</Link>? Fill out the form below!</Span>
        <Span cursive>Please remember that this website will just help you with the formatting. It will <Underline>not</Underline> submit the issue for you.</Span>

        <Div>
          <Li>Please read our <Link href="">Bug Submission Guidelines</Link></Li>
          <Li>Make sure your bug isn't already known:</Li>
          <LinkWrap>
            <Link href="">Android Bugs</Link>
            <div>|</div>
            <Link href="">iOS Bugs</Link>
            <div>|</div>
            <Link href="">Desktop Bugs</Link>
            <div>|</div>
            <Link href="">Website Bugs</Link>
          </LinkWrap>
        </Div>

        <CTAButton onClick={click}>Start Reporting! <Chevron>V</Chevron></CTAButton>
      </Container>
    </TopSection>
  )
}

const TopSection = styled.section`
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  padding: 30px;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const H1 = styled(H1Style)`
  margin-top: 20px;
`;

const Span = styled.span`
  max-width: 600px;
  margin: 15px 0;
  letter-spacing: .5px;

  ${props => !!props.cursive ? `
    font-style: italic;
    font-size: 18px;
  ` : ''}
`

const Underline = styled.span`
  text-decoration: underline;
`;

const Link = styled(LinkStyle)`

`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Li = styled.span`

  &:before {
    content: "•";
    color: ${props => props.theme.colors.text};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const CTAButton = styled(ButtonStyle)`
  margin-top: 30px;
  padding: 10px 25px;
  letter-spacing: .5px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.blurple};
  border-radius: 10px;
  font-size: 1.2rem;

  &:hover{
    background: ${props => props.theme.colors.blurpleHover};
  }
`;

const Chevron = styled.span`

`;

export default Top;
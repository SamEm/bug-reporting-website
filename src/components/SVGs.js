import styled from 'styled-components';
import SVGCircleEmpty from '../assets/circle-empty.svg';
import SVGCircleFull from '../assets/circle-full.svg';
import SVGDots from '../assets/dots.svg';

const SVGs = () => {

  return(
    <>
      <CircleTop />
      <CircleRight />
      <Dots />
    </>
  )
}

const CircleTop = styled.div`
  background: url(${ SVGCircleEmpty }) no-repeat 00/cover;
  width: 500px;
  height: 500px;
  position: absolute;
  left: -260px;
  top: -100px;
  z-index: -1;
`;

const Dots = styled.div`
  background: url(${ SVGDots }) no-repeat 00/cover;
  width: 500px;
  height: 500px;
  position: absolute;
  bottom: -60px;
  left: 50px;
  z-index: -1;
`;

const CircleRight = styled.div`
background: url(${ SVGCircleFull }) no-repeat 00/cover;
  width: 500px;
  height: 500px;
  position: absolute;
  right: -160px;
  bottom: -50px;
  z-index: -1;
`;

export default SVGs;
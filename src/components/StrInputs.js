import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputStyle, InputWrap } from '../utils/theme';
import closeIcon from '../assets/close-circle-outline.svg';
import addIcon from '../assets/plus-circle-outline.svg';

const StrInputs = ({allStr, register}) => {

  const [strList, setStrList] = useState(['', '']);

  const handleInputChange = (e, i) => {
    const { value } = e.target;
    const list = [...strList];
    list[i] = value;
    // console.dir(e.target)
    setStrList(list);
  }

  const handleRemoveClick = i => {
    const list = [...strList];
    list.splice(i, 1);
    setStrList(list);
  }

  const handleAddClick = () => {
    setStrList([...strList, '']);
  }

  useEffect(() => {
    return () => {
      allStr(strList)
    }
  }, [allStr, strList])

  console.log('test', strList)
  return (
    <>
      {
        strList.map((x, i)  => {
          return (
            <InputWrap key={i}>
              <InputStyle str type="text" ref={register} name="str" value={x} onChange={e => handleInputChange(e, i)} placeholder="Type your answer here..." />

              {
                i === (strList.length - 1) && <Icon src={addIcon} onClick={() => handleAddClick(i)} />
              }
              {
                strList.length !== 1 && <Icon src={closeIcon} onClick={() => handleRemoveClick(i)} />
              }
              
            </InputWrap>
          )
        })
      }
    </>
  )
}

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 12px 14px 12px 0;
`;

export default StrInputs;




/*
const StrInputs = () => {
  let inputRef = useRef([]);

  inputRef.current = [0,0,0,0].map((ref, index) => inputRef.current[index] = React.createRef())

  console.log(inputRef)

  const selectInput = (i) => {
    console.log(inputRef.current)
    console.log(i)
    console.log(i , inputRef.current[i])
    inputRef.current[i].current.focus();
  }

  return (
    <>
    {
      [0, 0, 0, 0].map((el, i) => {
        return (
          <>
            <InputWrap onClick={() => {selectInput(i)}} str>
              <InputStyle ref={inputRef.current[i]} type="text" placeholder="Type your answer here..." />
              <Icon src={closeIcon} />
            </InputWrap>
          </>
        )
      })
    }
    </>
  )
}*/
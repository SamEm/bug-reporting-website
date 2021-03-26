import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { H1Style, InputStyle, InputWrap } from '../utils/theme';
import StrInputs from './StrInputs';

const schema = yup.object().shape({
  description: yup.string(),
  str: yup.string(),
  // expected: yup.string().required('Please enter the expected result'),
  // actual: yup.string().required('Please enter the actual result'),
  // client: yup.string().required('Please enter the client settings'),
  // system: yup.string().required('Please enter the system settings'),
});

const SubmitForm = () => {
  const [str, setStr] = useState([]);

  console.log('parent', str);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('data', data)
    console.log('data', str)
  }
  console.log('error', errors)

  return (
    <Container>
      <H1>Submit a bug</H1>

      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <FormSection>
          <DescWrap>
            <InputHead>Describe your bug in a single sentence.</InputHead>
            <InputHelp>Avoid using non-descriptive words like "it glitches" or "it's broken"</InputHelp>
          </DescWrap>
          <InputWrap>
            <InputStyle type="text" name="description" ref={register} placeholder="Type your answer here..." />
          </InputWrap>
        </FormSection>

        <FormSection>
          <DescWrap>
            <InputHead>Steps to reproduce.</InputHead>
            <InputHelp>Write down each action you took to make the bug happen. These have to be reproducible 100% of the time.</InputHelp>
          </DescWrap>
          <StrInputs allStr={str => setStr(str)} register={register}/>
        </FormSection>

        <FormSection>
          <DescWrap>
            <InputHead>Expected Result</InputHead>
            <InputHelp>What should happen if the bug wasn't there?</InputHelp>
          </DescWrap>
          <InputWrap>
            <InputStyle type="text" placeholder="Type your answer here..." />
          </InputWrap>
        </FormSection>

        <FormSection>
          <DescWrap>
            <InputHead>Actual Result</InputHead>
            <InputHelp>What actually happens when following the steps?</InputHelp>
          </DescWrap>
          <InputWrap>
            <InputStyle type="text" placeholder="Type your answer here..." />
          </InputWrap>
        </FormSection>

        <FormSection>
          <DescWrap>
            <InputHead>Client Settings</InputHead>
            <InputHelp>Which client are you experiencing the bug on?</InputHelp>
          </DescWrap>
          <InputWrap state="err">
            <InputStyle type="text" placeholder="Type your answer here..." />
          </InputWrap>
        </FormSection>
        <FormSection>
          <DescWrap>
            <InputHead>System Settings</InputHead>
            <InputHelp>What system are you experiencing the bug on?</InputHelp>
          </DescWrap>
          <InputWrap>
            <InputStyle type="text" placeholder="Type your answer here..." />
          </InputWrap>
        </FormSection>

        <button type="submit">Generate</button>
      </Form>

    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px 0;
`;

const H1 = styled(H1Style)`
  position: relative;
  margin-bottom: 75px;

  &:after {
    content: '';
    height: 3px;
    width: 100%;
    background-color: ${props => props.theme.colors.text};
    display: block;
    position: absolute;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 30px;
`;

const FormSection = styled.div`
  display: grid;
  gap: 10px;
  width: 700px;
`;

const DescWrap = styled.div`
`;

const InputHead = styled.h2`
  font-size: 24px;
  font-weight: normal;
  position: relative;

  &::after {
    content: 'Required';
    color: ${props => props.theme.colors.red};
    font-size: 13px;
    position: absolute;
    top: 50%;
    margin-left: 10px;
    transform: translateY(-50%);
    letter-spacing: .2px;
  }
`;

const InputHelp = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.textDim};
`;

export default SubmitForm;
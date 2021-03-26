import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './utils/theme';
import Top from './components/Top';
import Selection from './components/Selection';
import Form from './components/Form';

function App() {
  const scrollToElm = (r) => window.scrollTo(0, r.current.offsetTop);
  const topElm = useRef(null);
  const selectionElm = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Top reference={topElm} click={() => scrollToElm(selectionElm)}/>
      <Selection reference={selectionElm}/>
      <Form />
    </ThemeProvider>
  );
}

export default App;

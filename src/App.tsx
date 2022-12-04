import { useState } from 'react';
import Header from './components/Header';
import Archive from './components/Archive';
import About from './components/About';
import Main from './components/Three';
import './style/index.css'

const App = () => {
  const [show, setShow] = useState<Number>(1);
  const changeState = (n: Number): void => setShow(n);

  return (
    <>
      <Header show={show} changeState={changeState} />
      <Main />
      <About show={show} />
      <Archive show={show} />
    </>
  );
};

export default App;

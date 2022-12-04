import { useState } from 'react';
import Header from './components/Header';
import Archive from './components/Archive';
import About from './components/About';
import Main from './components/Three';
import './style/index.css'

const App = () => {
  const [isActive, setIsActive] = useState<Boolean>(true);
  const changeIsActive = (v: Boolean): void => setIsActive(v);

  return (
    <>
      <Header isActive={isActive} changeIsActive={changeIsActive} />
      <Main />
      <About isActive={isActive} />
      <Archive isActive={isActive} changeIsActive={changeIsActive} />
    </>
  );
};

export default App;

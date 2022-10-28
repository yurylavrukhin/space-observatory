import Logo from './components/Logo/Logo';
import Composition from './components/Composition/Composition';
import { container } from './App.css';
import { Main } from './components/Main/Main';

export const App = () => {
  return (
    <div className={container}>
      <Logo />
      <Composition />
      <Main />
    </div>
  );
};

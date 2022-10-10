import './App.css';
import { Eclipse } from './components/Eclipse/Eclipse';
import { Form } from './components/Form/Form';
import { Logo } from './components/Logo/Logo';
import { Pane } from './components/Pane/Pane';
import { ShootingStars } from './components/ShootingStars/ShootingStars';
import { StarrySky } from './components/StarrySky/StarrySky';

function App() {
  return (
    <div className='App'>
      <Logo />
      <StarrySky />
      <ShootingStars />
      <Eclipse />
      <Pane />
      <Form />
    </div>
  );
}

export default App;

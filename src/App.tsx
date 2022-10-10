import { Logo } from './components/Logo/Logo';
import { Composition } from './components/Composition/Composition';
import { Form } from './components/Form/Form';
import { container } from './App.css';

function App() {
  return (
    <div className={container}>
      <Logo />
      <Composition />
      <Form />
    </div>
  );
}

export default App;

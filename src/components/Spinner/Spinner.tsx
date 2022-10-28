import { memo } from 'react';
import { spinner, spinner3 } from './Spinner.css';

const Spinner = () => {
  return <div className={`${spinner} ${spinner3}`} />;
};
export default memo(Spinner);

import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import Button from '@mui/material/Button';

function FaseInicio() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <img src={reactLogo} alt="React Logo" className="w-32 h-32" />
      <h1 className="text-2xl font-bold mt-4">¡Hola, mundo!</h1>
      <p className="text-gray-600">Esta es una aplicación de ejemplo con Tailwind CSS y Material-UI.</p>
      <Button
        variant="contained"
        color="primary"
        className="mt-4"
        onClick={() => setCount(count + 1)}
      >
        Contador: {count}
      </Button>
    </div>
  );
}

export default FaseInicio;
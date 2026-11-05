import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {showConfetti && <Confetti />}

      <h1>¡Celebración con React Confetti!</h1>
      <p>Este es mi primer efecto de confeti con React.</p>

      <button onClick={() => setShowConfetti(true)}>
        ¡Lanzar confeti!
      </button>
    </div>
  );
}

export default App;
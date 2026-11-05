import PlanetScene from './PlanetScene';
import confetti from 'canvas-confetti';

function App() {
  const lanzarConfeti = () => {
   const duration = 5000;
const animationEnd = Date.now() + duration;

const defaults = {
  startVelocity: 30,
  spread: 360,
  ticks: 200,
  zIndex: 100
};

const interval = setInterval(() => {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  confetti({
    ...defaults,
    particleCount: 50,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  });
}, 250);
  };

  return (
    <div>
      <PlanetScene />

      <button
        onClick={lanzarConfeti}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 10,
          padding: '12px 20px',
          cursor: 'pointer'
        }}
      >
        ¡Lanzar confeti!
      </button>
    </div>
  );
}

export default App;
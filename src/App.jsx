import PlanetScene from './PlanetScene';
import confetti from 'canvas-confetti';

function App() {
  const lanzarConfeti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
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
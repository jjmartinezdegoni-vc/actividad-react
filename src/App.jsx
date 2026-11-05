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
    <div style={{
      textAlign: 'center',
      padding: '100px',
      fontFamily: 'Arial'
    }}>
      <h1>¡Celebración con Canvas Confetti!</h1>

      <p>Este es mi segundo efecto de confeti con React.</p>

      <button onClick={lanzarConfeti}>
        ¡Lanzar confeti!
      </button>
    </div>
  );
}

export default App;
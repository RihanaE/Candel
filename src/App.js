import Candle from './components/Candle';
import ParticleBackground from './components/ParticleBackground'; 

function App() {
  return (
    <div className='h-screen flex justify-center items-center text-center'>
      <ParticleBackground />
      <Candle />
    </div>
  );
}

export default App;


import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from './config/particle-config';

export default function ParticleBackground() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    
    await loadFull(engine);
    
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

    return <Particles 
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={particleConfig}
     ></Particles>
}








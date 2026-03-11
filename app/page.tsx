import { Header } from "@/components/navbar/header-2";
import HeroText from "@/components/home/hero/herotext";
import DarkVeil from "@/components/home/hero/DarkVeil";



export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div style={{ position: 'absolute', height: '100vh', width: '100vw', zIndex: 100 }}>
        <Header />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>

        <div style={{ position: 'absolute', height: '100vh', width: '100vw' }}>

          <DarkVeil hueShift={25} noiseIntensity={0} scanlineIntensity={0} speed={1} scanlineFrequency={0} warpAmount={1} resolutionScale={1} />

        </div>

        <div style={{ position: 'relative' }}>

          <HeroText />



        </div>

      </div>
    </div>

  );
}

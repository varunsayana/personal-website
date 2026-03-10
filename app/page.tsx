import { StaggeredMenu } from "@/components/StaggeredMenu";
import HeroText from "@/components/home/herotext";
import DarkVeil from "@/components/home/DarkVeil";



export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>

      <StaggeredMenu isFixed={true} />

      <div style={{ position: 'absolute', height: '100vh', width: '100vw' }}>

        <DarkVeil hueShift={25} noiseIntensity={0} scanlineIntensity={0} speed={1} scanlineFrequency={0} warpAmount={1} resolutionScale={1} />

      </div>

      <div style={{ position: 'relative' }}>

        <HeroText />

      </div>

    </div>

  );
}

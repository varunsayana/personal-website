import DarkVeil from "@/components/DarkVeil";


export default function Home() {
  return (
    <div>
      <div style={{ display: 'fit', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <DarkVeil
          hueShift={25}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={28}
          warpAmount={1}
          resolutionScale={1.25}
        />
      </div>
    </div>
  );
}

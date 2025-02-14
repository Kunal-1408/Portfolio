import AboutMeSection from "@/components/About";
import HeroGeometric from "@/components/hero";
import GlowingEffectDemoSecond from "@/components/glowing-effect-demo-2";
import FrameworkGrid from "@/components/logos";
import GoogleGeminiEffectDemo from "@/components/google-gemini-effect-demo";
import SpotlightNewDemo from "@/components/spotlight-new-demo";

export default function Home() {
  return (
      <main>
        <HeroGeometric/>
          <div className=" min-h-full w-full bg-black  bg-grid-white/[0.2]  relative flex flex-col items-center  ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
              <AboutMeSection/>
              <FrameworkGrid/>
              <GlowingEffectDemoSecond/>

              <SpotlightNewDemo/>
              <GoogleGeminiEffectDemo/>
          </div>

      </main>
        
  );
}

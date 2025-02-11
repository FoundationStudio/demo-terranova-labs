import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Partners } from "./components/sections/Partners";
import { About } from "./components/sections/About";
import { Team } from "./components/sections/Team";
import {
  // Spotlight,
  SpotlightAnimated,
} from "./components/effects/Spotlight";
import { Particles } from "./components/effects/Particles";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* <Spotlight /> */}
      <SpotlightAnimated />
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero />
          <Particles
            className="animate-fade-in fixed inset-0 -z-10"
            quantity={100}
          />
          <Services />
          <Partners />
          <About />
          <Team />
        </main>
      </div>
    </>
  );
}

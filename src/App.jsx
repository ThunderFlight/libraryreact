import { AboutCarousel } from "./components/aboutCarousel/aboutCarousel";
import { Favorites } from "./components/favorites/favorites";
import { Header } from "./components/header/header";
import { WelcomeBanner } from "./components/welcomeBanner/welcomeBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeBanner />
        {/* <div className={styles.container}> */}
        <AboutCarousel />
        <Favorites />
        {/* </div> */}
      </main>
    </div>
  );
}

export default App;

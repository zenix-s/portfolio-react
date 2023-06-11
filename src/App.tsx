import Header from "./components/header/header";
import About from "./components/me/me";
import Footer from "./components/footer/footer";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import Proyectos from "./components/proyectos/Proyectos";
function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      <main className="h-full min-h-screen w-full">
        <About />
        <Proyectos />
      </main>
      <Footer />
    </div>
  );
}

export default App;

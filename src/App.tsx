import Header from "./components/header/header";
import About from "./components/me/me";
import Proyectos from "./components/proyectos/proyectos";
import UpButton from "./components/UpButton";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App bg-slate-700">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
      <UpButton />
    </div>
  );
}

export default App;

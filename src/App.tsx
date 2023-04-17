import Header from "./components/header/header";
import About from "./components/about/about";
import Proyectos from "./components/proyectos/proyectos";
import UpButton from "./components/UpButton";
import Me from "./components/me/me";
function App() {
  return (
    <div className="App bg-slate-700">
      <Header />
      <main>
        <About />
        <Me />
        <Proyectos />
      </main>
      <UpButton />
    </div>
  );
}

export default App;

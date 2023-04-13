import Header from "./components/header/header";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import UpButton from "./components/UpButton";
function App() {
  return (
    <div className="App bg-slate-700">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <UpButton />
    </div>
  );
}

export default App;

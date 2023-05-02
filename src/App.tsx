import Header from "./components/header/header";
import About from "./components/me/me";
import Footer from "./components/footer/footer";
import {CiTwitter, CiFacebook} from "react-icons/ci";
function App() {
  return (
    <div className="App bg-slate-700 px-12 py-8 h-screen w-screen">
      <div className=" bg-slate-700 overflow-scroll flex h-full border border-white/50">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
      </div>
      <div className="absolute top-0 left-0 w-10 h-full overflow-hidden flex flex-col gap-4">
        <a href="">
          <CiTwitter className="text-white/50 w-10 h-10" />
        </a>
        <a href="">
          <CiFacebook className="text-white/50 w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default App;

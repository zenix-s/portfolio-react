import Header from "./components/header/header";
import About from "./components/me/me";
import Footer from "./components/footer/footer";
import { CiTwitter, CiFacebook } from "react-icons/ci";
function App() {
  return (
    <div className="relative flex h-screen w-screen bg-deepdark px-16 py-8">
      <Header />
      <main className="w-full h-full">
        <About />
      </main>
    </div>
  );
}

export default App;

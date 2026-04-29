import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";

import PhonePreview from "./components/PhonePreview";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Trusted />
      <Hero />
      <PhonePreview/>
    </div>
  );
}

export default App;

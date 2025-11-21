
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Investments } from './components/Investments';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Investments />
      </main>
      <Footer />
    </div>
  );
}

export default App;
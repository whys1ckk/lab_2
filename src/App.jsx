import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <div>
        <Header />
        <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
          <About />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Experience />
            <div className="space-y-6">
              <Education />
              <Skills />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
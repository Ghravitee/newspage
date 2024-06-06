
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <>
   <div className='px-4 pt-8 lg:px-40 lg:py-14'>
     <Navbar />
   </div>
   <main className='px-4 py-8 lg:px-40 lg:pt-0'>
     <Hero />
     <Info />
   </main>
   </>
  );
}

export default App;

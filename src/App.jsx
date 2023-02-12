import './App.css';
import img1 from './components/img/img1.svg'
import img2 from './components/img/img2.svg'
import img3 from './components/img/Img3.svg'
import img4 from './components/img/amico.svg'
import img5 from './components/img/Bg.svg'
import img8 from './components/img/Avator.svg'
import img9 from './components/img/image.svg'
import img7 from './components/img/Bg.png'
import img6 from './components/img/icon.png'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Price from './components/price/Price';
function App() {
  function mode(e) {
    console.log(e.target.value);
    window.localStorage.setItem('mode', e.target.value)
  }
  return (
    <div className="App">

      <img src={img5} alt="" className='img5' />
      <img src={img7} alt="" className='img7' />
      <div className="container">
        <img src={img1} alt="" className='img1' />
        <img src={img2} alt="" className='img2' />
        <img src={img3} alt="" className='img3' />
        <Header />
        <img src={img6} alt="" className='img6' />
        <img src={img6} alt="" className='img61' />
        <img src={img6} alt="" className='img62' />
        <img src={img6} alt="" className='img63' />
        <Hero />
        <img src={img4} alt="" className='img41' />
        <img src={img4} alt="" className='img42' />
        <img src={img4} alt="" className='img43' />
        <img src={img8} alt="" className='img8' />
        <img src={img8} alt="" className='img81' />
        <img src={img8} alt="" className='img82' />
        <img src={img8} alt="" className='img83' />
        <img src={img9} alt="" className='img91' />
        <img src={img9} alt="" className='img92' />
        <img src={img9} alt="" className='img93' />
        <Price />
      </div>
    </div>
  );
}

export default App;
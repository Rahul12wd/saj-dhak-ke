import './App.css'
import Header from "./components/Header/header";
import HeaderSlider from "./components/Slider/slider";
import  Categories  from './components/Categories/Categories';
import Trending from './components/TrendingPage/Trending';
import Collection from './components/Collection/Collection';
import Testmonial from './components/Testmonials/Testmonials';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <>
      <Header/>
      <HeaderSlider/>
      <Categories/>
      <Trending/>
      <Collection/>
      <HeaderSlider/>
      <Testmonial/>
      <Footer/>
    </>
    
  )
}

export default App

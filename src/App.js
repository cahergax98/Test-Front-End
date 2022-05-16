import './App.css';
import BannerCarrousel from './components/banner/BannerCarrousel'
import Header from './components/header/Header'
import Main from './components/main/Main'
import NewsLetter from './components/newsletter/NewsLetter'
import Footer from './components/footer/Footer'

function App() {
  return (<>
    <Header />
    <BannerCarrousel />
    <Main />
    <NewsLetter />
    <Footer />
  </>);
}

export default App;

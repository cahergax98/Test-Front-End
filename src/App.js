import './App.css';
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Main from './components/main/Main'
import NewsLetter from './components/newsletter/NewsLetter'
import Footer from './components/footer/Footer'

function App() {
  return (<>
    <Header />
    <Banner />
    <Main />
    <NewsLetter />
    <Footer />
  </>);
}

export default App;

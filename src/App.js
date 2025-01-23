import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import Modal from './components/Modal';
import Listing from './components/Listing';


const App = () => {
  const modal = useSelector(state => state.modal);
  const { openClose } = modal;
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/listing" element={<Listing/>} />

        </Routes>
        {/* <Route path="/" element={<Modal />} /> */}
        {openClose === 'open' && <Modal />}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
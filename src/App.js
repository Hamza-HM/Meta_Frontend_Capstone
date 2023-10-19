import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import BookingPage from './Pages/BookingPage';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';

function App() {
  return (
    <Router>
    <ChakraProvider>
      <AlertProvider>
      <main>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reservations" element={<BookingPage />} />
          {/* Add routes for other components as needed */}
        </Routes>
        <Footer />
      </main>
      </AlertProvider>
    </ChakraProvider>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/layout/Navbar';
import MainContainer from './components/layout/MainContainer';
import Home from './components/Home';
import CustomerList from './components/customers/CustomerList';
import CustomerAccounts from './components/accounts/CustomerAccounts';

function App() {
  return (
      <Router>
        <Navbar />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/customers/:id/accounts" element={<CustomerAccounts />} />
          </Routes>
        </MainContainer>
      </Router>
  );
}

export default App;

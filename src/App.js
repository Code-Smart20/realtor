import { Route, Routes, } from 'react-router-dom';
import './App.css';
import { CreateListing, ForgotPass, Home, Offers, Profile, SignIn, SignUp } from './pages';
import Header from './header/Header';

function App() {
  return (

    <>
      <Header />
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="profile" element={<Profile />} />

          <Route path="/offers" element={<Offers />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/create_listing" element={<CreateListing/>} />

        </Routes>
      

    </>
       
  );
}

export default App;

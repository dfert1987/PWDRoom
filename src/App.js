import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bathroom from './pages/Bathroom';
import Discovery from './pages/Discovery';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/user-profile' element={<UserProfile />} />
                    <Route path='/bathroom' element={<Bathroom />} />
                    <Route path='/discovery' element={<Discovery />} />
                    <Route
                        path='/forgot-password'
                        element={<ForgotPassword />}
                    />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />4
                </Routes>
            </Router>
        </>
    );
}

export default App;

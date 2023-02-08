import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import './App.css';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Home />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <Header />
                            <Contact />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <Header />
                            <About />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <>
                            <Header />
                            <Login />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;

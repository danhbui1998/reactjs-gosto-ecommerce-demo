import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import { publicRoutes } from './routes/routes';

import './App.css';
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

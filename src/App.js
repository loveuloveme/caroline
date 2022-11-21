import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/roboto-mono";

import Home from "./pages/Home";
import Board from './pages/Board';
import Login from "./pages/Login";

import Auth from "./components/Auth";
import store from './store';
import { Provider } from 'react-redux';

import history from "./history";

function App() {
    const location = useLocation();

    return (
        <Provider store={store}>
            <Auth />
            <Box>
                <AnimatePresence exitBeforeEnter>
                    <Routes history={history} location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/board" element={<Board />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </AnimatePresence>
            </Box>
        </Provider>
    );
}

export default App;

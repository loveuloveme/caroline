import { Routes, Route, useLocation } from "react-router-dom";
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


function App() {
    const location = useLocation();

    return (
        <Box>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/board" element={<Board />} />
                </Routes>
            </AnimatePresence>
        </Box>
    );
}

export default App;

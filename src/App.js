import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Board from './pages/Board';

import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/comfortaa/700.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css"
import "@fontsource/oswald/600.css"
import "@fontsource/oswald/700.css"
import "@fontsource/roboto-mono";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

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

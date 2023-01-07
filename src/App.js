import { Routes, Route, useLocation, useNavigate, useRoutes, BrowserRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/roboto-mono";

import Home from "./pages/Home";
import Board from './pages/Board';
import Login from "./pages/Login";

import Auth from "./components/Auth";
import store from './store';
import { Provider } from 'react-redux';

const AppRoutes = () => useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/board/:boardId", element: <Board /> },
    { path: "/", element: <Login /> },
]);


function App() {
    return (
        <Provider store={store}>
            <Auth>
                <Box h='100%'>
                    <AnimatePresence exitBeforeEnter>
                        <AppRoutes />
                        {/* <BrowserRouter history={history} location={location} key={location.pathname}>
                        <AppRoutes />
                    </BrowserRouter > */}
                    </AnimatePresence>
                </Box>
            </Auth>
        </Provider>
    );
}

export default App;

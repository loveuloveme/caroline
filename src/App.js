import { useRoutes } from "react-router-dom";
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
import { ReactFlowProvider } from "reactflow";

const AppRoutes = () => useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/board/:service/:boardId", element: <Board /> },
    { path: "/", element: <Login /> },
]);


function App() {
    return (
        <Provider store={store}>
            <ReactFlowProvider>
                <Auth>
                    <Box h='100%'>
                        <AnimatePresence exitBeforeEnter>
                            <AppRoutes />
                        </AnimatePresence>
                    </Box>
                </Auth>
            </ReactFlowProvider>
        </Provider>
    );
}

export default App;

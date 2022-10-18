import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './theme.js';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);

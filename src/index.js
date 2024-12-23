import App from './app';
import ReactDOM from "react-dom";
import React from 'react';
import { createRoot } from 'react-dom/client'



const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}

const container = document.getElementById('root');
const root = createRoot(container); // Создаем корень
root.render(<App />); // Рендерим компонент
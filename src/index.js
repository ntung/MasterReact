import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Activities from "./routes/activities";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="activities" element={<Activities />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route index element={
                        <main style={{ padding: "1rem" }}>
                            <h3>Select an invoice on the left sidebar menu</h3>
                        </main>
                    } />
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route path="*" element={
                    <main style={{ padding: "1rem"}}>
                        <p>There's nothing here!</p></main>
                } />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

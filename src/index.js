// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// // import reportWebVitals from './reportWebVitals';
// import store from './redux/store';
// import { Provider } from "react-redux";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           closeOnClick
//           pauseOnHover={false}
//           theme="dark"  // Dark theme is set here
//         />
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/ht8fvnxvvxj96ootop8ebiqumetuv9gc.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup to avoid duplicates
        };
    }, []);

    return (
        <BrowserRouter>
            <Provider store={store}>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    closeOnClick
                    pauseOnHover={false}
                    theme="dark"
                />
                <App />
            </Provider>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


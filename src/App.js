import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import Store from "../src/utils/Store";
import Header from './Component/Header';
import Footer from './Component/Footer';
import AboutUs from './Component/AboutUs';
import RestaurantDetail from './Component/RestaurantDetail';
import Cart from './Component/Cart';
import Blogs from './Component/Blogs';
import Offers from './Component/Offers';
import Restaurants from './Component/Restaurants';
import Register from './Component/Register';
import Login from './Component/Login';
import Search from './Component/Search';
import BlogDetail from './Component/BlogDetail';
import Checkout from './Component/Checkout';
import AppLayout from './Component/AppLayout';
import Error from './Component/Error';

const PopupMessage = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg text-center max-w-md w-full">
        <h2 className="text-[28px] font-bold text-[#2b2b2d] mb-2">Can't Load Content?</h2>
        <h6 className="text-[18px] font-semibold text-gray-600 mb-1">
          You may not be able to see the content due to CORS restrictions in your browser.
        </h6>
        <p className="text-gray-600 text-[14px] mb-4">
          To fix this, please enable the <span className="font-semibold">"Allow CORS"</span> feature in your browser by using an extension like <span className="font-semibold">"Allow CORS: Access-Control-Allow-Origin"</span> for Chrome or a similar tool for other browsers.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 cr-button mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(true);  // Popup state in App component

  const handleClosePopup = () => {
    setShowPopup(false);  // Close the popup when the user clicks on "Close"
  };

  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        {showPopup && <PopupMessage onClose={handleClosePopup} />}  {/* Show the popup here */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:bid",
        element: <BlogDetail />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

export default App;

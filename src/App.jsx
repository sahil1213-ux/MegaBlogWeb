import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwriteServices/Auth";
import { login, logout } from "./reducers/AuthSlice";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom";

/**
 * imports
 * // redux toolkit
 * npm install @reduxjs/toolkit react-redux
 * npm i react-router-dom
 * // apprite
 * npm i @tinymce/tinymce-react
 * npm i apprite
 * // to get html code from backend and show it in ui
 * npm i html-react-parser
 * //form validation
 * npm i react-hook-form
 * @returns
 */
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  console.log("env variables", import.meta.env);
  console.log("App project id", import.meta.env.VITE_APPWRITE_URL);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }));
        }
        dispatch(logout());
      })
      .catch((e) => {
        console.log("error occurred in get current user", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className=" max-h-screen flex flex-wrap content-between bg-gray-400">
      <div className=" w-full h-full max-h-screen">
        <Header />
        <main className="flex-1 flex my-2 justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

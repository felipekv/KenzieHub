import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";

export const App= () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RoutesMain />
    </>
  );
};

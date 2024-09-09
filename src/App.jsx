import { Route, Routes } from "react-router-dom";
import { Cart, Footer, Header, Home, ProductView } from "./components";
import Modal from "./components/Layout/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector((state) => state.login.showModal);
  console.log(showModal);

  return (
    <>
      <Header />
      <main className="max-w-[1270px] px-5 mx-auto min-h-screen md:pt-[140px] pt-[160px]">
        {showModal && <Modal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

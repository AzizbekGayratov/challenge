import React from "react";
import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../store/LoginSlice";
import OTPInput from "./OTP";

export default function Modal() {
  const { showModal } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [modalState, setModalState] = React.useState("Hisobga kirish");

  return (
    <FlowbiteModal show={showModal} onClose={() => dispatch(hideModal())}>
      <FlowbiteModal.Header>
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
          {modalState === "Hisobga kirish" ? "Hisobga kirish uchun" : ""}
          {modalState === "Telefon raqami orqali kirish"
            ? "Telefon raqami orqali kirish"
            : ""}
          {modalState === "Telefon raqamini kiriting"
            ? "Telefon raqamini kiriting"
            : ""}
          {modalState === "Parolni tiklash" ? "Parolni tiklash" : ""}
          {modalState === "Kirishni tasdiqlash" ? "Kirishni tasdiqlash" : ""}
        </h5>
      </FlowbiteModal.Header>
      <FlowbiteModal.Body>
        {modalState === "Hisobga kirish" && (
          <div className="px-[60px] py-5 flex flex-col gap-3">
            <button
              onClick={() => setModalState("Telefon raqami orqali kirish")}
              className="w-full bg-MainColor rounded-lg py-[14px] text-white"
            >
              Kirish
            </button>
            <span className="text-[#6C757D] text-center">Yoki</span>
            <button
              onClick={() => dispatch(hideModal())}
              className="w-full border border-red-400 rounded-lg py-[13px] text-red-400"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        )}
        {modalState === "Telefon raqami orqali kirish" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(hideModal());
            }}
            className="flex flex-col items-center gap-4 px-[60px] py-5"
          >
            <input
              type="text"
              required
              onChange={(e) => {
                if (e.target.value * 1 === Number(e.target.value)) {
                  setPhone(e.target.value);
                }
              }}
              placeholder="Telefon raqam"
              value={phone}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              required
              value={password}
              placeholder="Parol"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button className="w-full bg-MainColor rounded-lg py-[14px] text-white">
              Kirish
            </button>
            <span
              onClick={() => setModalState("Telefon raqamini kiriting")}
              className="text-MainColor block text-center"
            >
              Parolni unutdingizmi ?
            </span>
          </form>
        )}
        {modalState === "Telefon raqamini kiriting" && (
          <form
            className="flex flex-col items-center gap-6 px-[60px] py-[60px]"
            onSubmit={(e) => {
              e.preventDefault();
              setModalState("Kirishni tasdiqlash");
              setPassword("");
            }}
          >
            <input
              type="password"
              required
              value={phone}
              placeholder="+ 998 9* *** ** **"
              onChange={(e) => {
                if (
                  e.target.value * 1 === Number(e.target.value) ||
                  e.target.value === "+"
                ) {
                  setPhone(e.target.value);
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button className="w-full bg-MainColor rounded-lg py-[14px] text-white">
              Kirish
            </button>
          </form>
        )}
        {modalState === "Kirishni tasdiqlash" && (
          <form
            className="flex flex-col items-center gap-6 px-[60px] py-[60px]"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(hideModal());
            }}
          >
            <div className="flex items-center gap-4">
              <OTPInput />
              <OTPInput />
              <OTPInput />
              <OTPInput />
            </div>
            <button className="w-full bg-MainColor rounded-lg py-[14px] text-white">
              Kirish
            </button>
            <span
              onClick={() => setModalState("Telefon raqamini kiriting")}
              className="text-[#6C757D] block text-center"
            >
              Parol kelmadimi ?
            </span>
          </form>
        )}
      </FlowbiteModal.Body>
    </FlowbiteModal>
  );
}

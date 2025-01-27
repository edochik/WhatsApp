import { useState } from "react";
import { Chat } from "../component/Chat";
import { Entrance } from "../component/Entrance/";
import "./App.module.scss";
import { PhoneInput } from "../component/PhoneInput/index.tsx";
import { useAppSelector } from "../redux/hooks.ts";

export interface Message {
  idMessage: string;
  message: string;
}

function App() {
  const { isAuthorized } = useAppSelector((state) => state.authorization);
  const { hasPhoneNumber } = useAppSelector((state) => state.phone);
  return (
    <>
      {!isAuthorized ? (
        <Entrance />
      ) : !hasPhoneNumber ? (
        <PhoneInput />
      ) : (
        <Chat />
      )}
    </>
  );
}

export default App;

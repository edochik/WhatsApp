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
  const { isHasPhoneNumber } = useAppSelector((state) => state.phone);
  const [userPhone, setUserPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("79046469738");
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <>
      {!isAuthorized ? (
        <Entrance />
      ) : !isHasPhoneNumber ? (
        <PhoneInput
          phoneNumber={phoneNumber}
          setUserPhone={setUserPhone}
          setPhoneNumber={setPhoneNumber}
        />
      ) : (
        <Chat
          phoneNumber={phoneNumber}
          setMessages={setMessages}
          messages={messages}
        />
      )}
    </>
  );
}

export default App;

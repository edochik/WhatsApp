import { Message } from "../../app/App.tsx";
import { InputUser } from "../InputUser/";
import { MessagePanel } from "../MessagePanel/";
import s from "./Chat.module.scss";

interface ChatProps {
  phoneNumber: string;
  setMessages: (messages: Message[]) => void;
  messages: Message[];
}

const Chat = ({ phoneNumber, setMessages, messages }: ChatProps) => {
  return (
    <div className={s.Chat}>
      <div className={s.wrapper}>
        <MessagePanel messages={messages} />
        <InputUser phoneNumber={phoneNumber} setMessages={setMessages} />
      </div>
    </div>
  );
};

export { Chat };

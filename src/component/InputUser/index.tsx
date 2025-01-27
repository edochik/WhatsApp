import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import s from "./InputUser.module.scss";
import { apiTokenInstance, idInstance, URL } from "../../utils/api.ts";
import { Message } from "../../app/App.tsx";
import { useState } from "react";
interface InputUserProps {
  phoneNumber: string;
  setMessages: (messages: Message[]) => void;
}

const InputUser = ({ phoneNumber, setMessages }: InputUserProps) => {
  const [message, setMessage] = useState("");
  const sendMessage = async () => {
    try {
      const response = await fetch(
        `${URL}waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
            message,
          }),
        }
      );
      if (!response.ok) {
        throw Error("");
      }
      const data: Record<string, string> = await response.json();
      setMessages((prev) => [...prev, { ...data, message }]);
      setMessage("");
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
      }
    }
  };
  return (
    <div className={s.InputUser}>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          className={s.input}
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Сообщение пользователя"
          placeholder="Type a message"
        />
        <button className={s.button} type="submit">
          <span role="img" aria-label="send">
            <ArrowRightIcon fill="green" width={24} height={24} />
          </span>
        </button>
      </form>
    </div>
  );
};

export { InputUser };

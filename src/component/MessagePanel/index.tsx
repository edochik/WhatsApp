import { useAppSelector } from "../../redux/hooks.ts";
import s from "./MessagePanel.module.scss";

const MessagePanel = () => {
  const { messages } = useAppSelector((state) => state.messages);
  return (
    <ul className={s.MessagePanel}>
      {messages.map((item) => {
        const { idMessage, textMessage } = item;
        return (
          <li className={s.item} key={idMessage}>
            <span className={s.message}>{textMessage}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { MessagePanel };

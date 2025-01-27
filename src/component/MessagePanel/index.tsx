import { Message } from "../../app/App.tsx";
import s from "./MessagePanel.module.scss";
interface MessagePanelProps {
  messages: Message[];
}

const MessagePanel = ({ messages }: MessagePanelProps) => {
  return (
    <ul className={s.MessagePanel}>
      {messages.map((item) => {
        const { message } = item;
        return (
          <li className={s.item}>
            <span className={s.message}>{message}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { MessagePanel };

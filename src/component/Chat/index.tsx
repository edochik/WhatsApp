import { InputUser } from "../InputMessage/index.tsx";
import { MessagePanel } from "../MessagePanel/";
import s from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={s.Chat}>
      <div className={s.wrapper}>
        <MessagePanel />
        <InputUser />
      </div>
    </div>
  );
};

export { Chat };

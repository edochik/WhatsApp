import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon.tsx";
import s from "./InputMessage.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { updateMessage } from "../../redux/chatSlice/chatSlice.ts";
import { fetchSendMessageThunk } from "../../redux/chatSlice/thunk/fetchSendMessageThunk.ts";

const InputMessage = () => {
  const { idInstance, apiTokenInstance, phoneNumber } = useAppSelector(
    (state) => state.authorization
  );
  const { message } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  const handleUpdateMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(updateMessage({ value }));
  };

  const handleSendMessage = () => {
    dispatch(
      fetchSendMessageThunk({
        phoneNumber,
        idInstance,
        apiTokenInstance,
        message,
      })
    );
  };

  return (
    <div className={s.InputUser}>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          className={s.input}
          type="text"
          name="message"
          value={message}
          onChange={(e) => handleUpdateMessage(e)}
          aria-label="Сообщение пользователя"
          placeholder="Type a message"
          autoFocus
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

export { InputMessage };

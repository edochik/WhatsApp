import s from "./PhoneInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { updatePhoneNumber } from "../../redux/phoneSlice/phoneSlice.ts";
import { fetchPhoneThunk } from "../../redux/phoneSlice/fetchPhoneThunk.ts";

const PhoneInput = () => {
  const dispatch = useAppDispatch();
  const { phoneNumber, error } = useAppSelector((state) => state.phone);
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.authorization
  );

  const handleUpdatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(updatePhoneNumber({ value }));
  };
  const onSubmitAddUser = () => {
    dispatch(fetchPhoneThunk({ phoneNumber, idInstance, apiTokenInstance }));
  };
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitAddUser();
      }}
    >
      <input
        className={s.input}
        type="text"
        name="phoneNumber"
        aria-label="номер телефона"
        value={phoneNumber}
        onChange={(e) => handleUpdatePhone(e)}
      />
      {error && <div>{error}</div>}
      <button
        className={s.button}
        type="submit"
        disabled={phoneNumber.length === 0}
      >
        +
      </button>
    </form>
  );
};

export { PhoneInput };

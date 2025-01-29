import s from "./Authorization.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { updateAuth } from "../../redux/authSlice/authSlice.ts";
import { fetchStateInstanceThunk } from "../../redux/authSlice/fetchStateInstanceThunk.ts";
import { InputField } from "../InputField/InputField.tsx";
import { authInputs } from "./authInputs.ts";
import { AuthData } from "../../redux/authSlice/authSlice.interface.ts";

const Authorization = () => {
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance, phoneNumber, error } = useAppSelector(
    (state) => state.authorization
  );

  const AuthObject = { idInstance, apiTokenInstance, phoneNumber };

  const isEmptyAuth = [idInstance, apiTokenInstance, phoneNumber]
    .map((value) => value.length)
    .some((value) => value === 0);

  const handleUpdateAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return;
    }
    dispatch(updateAuth({ key: name as keyof AuthData, value }));
  };

  const handleAuthorization = () => {
    dispatch(fetchStateInstanceThunk({ idInstance, apiTokenInstance }));
  };

  return (
    <form
      className={s.Authorization}
      onSubmit={(event) => {
        event.preventDefault();
        handleAuthorization();
      }}
    >
      {authInputs.map(({ value, ...rest }) => {
        return (
          <InputField
            key={value}
            textLabel={value === "phoneNumber" ? "phone" : value}
            name={value}
            value={AuthObject[value]}
            onChange={(e) => handleUpdateAuth(e)}
            {...rest}
          />
        );
      })}
      {error && <div>{error}</div>}
      <button className={s.button} type="submit" disabled={isEmptyAuth}>
        Войти
      </button>
    </form>
  );
};

export { Authorization };

import { useState } from "react";
import { apiTokenInstance, idInstance, URL } from "../../utils/api.ts";
import s from "./PhoneInput.module.scss";

interface PhoneInputProps {
  setUserPhone: (arg: boolean) => void;
  setPhoneNumber: (arg: string) => void;
  phoneNumber: string;
}

const PhoneInput = ({
  setUserPhone,
  setPhoneNumber,
  phoneNumber,
}: PhoneInputProps) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitAddUser = async () => {
    try {
      const response = await fetch(
        `${URL}waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber,
          }),
        }
      );
      if (!response.ok) {
        throw Error();
      }
      const data = await response.json();
      setUserPhone(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(false);
        setErrorMessage(error.message);
      }
    }
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
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className={s.button} type="submit">
        +
      </button>
    </form>
  );
};

export { PhoneInput };

import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styles/styles";
import styles from "./main.module.scss";

export const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputField type="text" id="username" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="id">id</InputLabel>
          <InputField type="id" id="id" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};

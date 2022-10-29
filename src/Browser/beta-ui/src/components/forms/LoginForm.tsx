import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styles/styles";
import styles from "./main.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
      </InputContainer>
      <Button className={styles.button}>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an Account? </span>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div>
    </form>
  );
};

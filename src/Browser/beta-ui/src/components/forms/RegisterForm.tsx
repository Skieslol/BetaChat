import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styles/styles";
import styles from "./main.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" {...register("email", { required: true })}/>
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputField type="text" id="username" {...register("username", { required: true })}/>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="id">id</InputLabel>
          <InputField type="id" id="id" {...register("id", { required: true })}/>
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" {...register("password", { required: true })}/>
      </InputContainer>
      <Button className={styles.button}>Create Account</Button>
      <div className={styles.footerText}>
        <span>Already have an Account? </span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};
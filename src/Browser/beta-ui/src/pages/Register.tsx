import { RegisterForm } from "../components/forms/RegisterForm";
import { Page } from "../styles/styles";

export const Register = () => {
    return (
        <Page display="flex" justifyContent="center" alignItems="center">
            <RegisterForm />
        </Page>
    );
}
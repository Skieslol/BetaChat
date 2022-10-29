import { Page } from "../styles/styles";
import { LoginForm } from "../components/forms/LoginForm";

export const Login = () => {
    return (
        <Page display="flex" justifyContent="center" alignItems="center">
            <LoginForm />
        </Page>
    );
}
import { useRouteError } from "react-router-dom";
import AppHeader from "./components/AppHeader";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="errorPage">
            <AppHeader />
            <div className="appHeaderPadding"></div>
            <h1>Oops!</h1>
            <p>Go back to the homepage?</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
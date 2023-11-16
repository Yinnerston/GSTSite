import AppHeader from "./components/AppHeader";

export default function PeoplePage() {

    return (
        <div className="peoplePage">
            <AppHeader />
            <div className="appHeaderPadding"></div>
            <div className="headingContainer">
                <h1>People</h1>
            </div>
            <p>Go back to the homepage?</p>
        </div>
    )
}
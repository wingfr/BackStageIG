import { SideBar } from "../Components/SideBar";
import { Account } from "../Components/Account";
import "./AccountPage.css"

export function AccountPage() {
    return (
        <>
            <div className="account-page-container">
                <SideBar />
                <Account className="account-page-account" />
            </div>
        </>
    );
}
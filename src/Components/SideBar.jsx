import { Link } from "react-router";
import Logo from "/src/assets/backstage_logo.svg?react";
import HomeIcon from "/src/assets/icon_home.svg?react";
import SearchIcon from "/src/assets/icon_search.svg?react";
import MessageIcon from "/src/assets/icon_message.svg?react";
import PlusIcon from "/src/assets/icon_plus.svg?react";
import './SideBar.css'

export function SideBar({ onPlusClick }) {



    return (
        <div className="side-bar-container">
            <div className="side-bar-back-stage-logo-section">
                <Link to="/">
                    <div className="side-bar-back-stage-logo-container">
                        <Logo className="side-bar-back-stage-logo" />
                    </div>
                </Link>
            </div>
            <div className="side-bar-menu">
                <Link to="/">
                    <div className="side-bar-home-logo-container">
                        <HomeIcon className="side-bar-home-logo" />
                    </div>
                </Link>
                <div className="side-bar-search-logo-container">
                    <SearchIcon className="side-bar-search-logo" />
                </div>
                <div className="side-bar-message-logo-container">
                    <MessageIcon className="side-bar-message-logo" />
                </div>
                <div
                    className="side-bar-plus-logo-container"
                    onClick={onPlusClick}
                >
                    <PlusIcon className="side-bar-plus-logo" />
                </div>
                <Link to={"/account"}>
                    <div className="side-bar-my-account-container">
                        <div className="side-bar-my-account">
                            <div className="person"></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="side-bar-hambergur-container">
                <div className="side-bar-hambergur">
                    ☰
                </div>
            </div>
        </div>
    );
}
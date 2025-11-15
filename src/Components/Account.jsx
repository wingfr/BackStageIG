import "./Account.css";

export function Account() {
    return (
        <>
            <div className="account-container">
                <div className="account-page-header">
                    <div className="account-page-logo-container">
                        <div className="account-page-logo"></div>
                    </div>
                    <div className="account-page-header-second-section">
                        <div className="account-page-name">
                            takahashi12354
                        </div>
                        <div className="account-page-follow-container">
                            <div className="account-page-follow-count">
                                フォロー中0人
                            </div>
                            <div className="account-page-follower-count">
                                フォロワー0人
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-page-middle">
                    <div className="account-page-middle-profile-setting-container">
                        <div className="account-page-middle-profile-setting">
                            プロフィールを編集
                        </div>
                    </div>
                    <div className="account-page-middle-setting-container">
                        <div className="account-page-middle-setting">
                            アカウント設定
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
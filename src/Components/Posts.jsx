import HeartIcon from "/src/assets/icon_heart.svg?react";
import CommentIcon from "/src/assets/icon_comment.svg?react";

import "./Posts.css";

export function Posts({ posts }) {
    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="post-container">
                    <div className="post-account-container">
                        <div className="post-account-img">
                        </div>
                        <div className="post-account-name">
                            {post.user ?? "unknown"}
                        </div>
                    </div>
                    <div className="post-img-container">
                        <img src={post.image} alt="post"></img>
                    </div>
                    <div className="post-info-container">
                        <div className="post-info-logo-container">
                            <div className="post-info-heart-container">
                                <HeartIcon className="post-heart-logo" />
                            </div>
                            <div className="post-info-comments-container">
                                <CommentIcon className="post-comment-logo" />
                            </div>
                        </div>
                        <div className="post-info-heart-count">
                            いいね！{post.likes}件
                        </div>
                        <div className="post-info-discription">
                            {post.caption}
                        </div>
                    </div>
                </div>

            ))}
            <div className="post-bottom-message-container">
                <div className="post-bottom-message">
                    <span className="post-bottom-message-over">以上です</span>
                    <span className="post-bottom-message-read">過去3日以内の新規投稿はすべて既読になりました。</span>
                </div>
            </div>
        </>
    );
}
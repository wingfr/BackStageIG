import { useState } from "react";
import "./AddPost.css";

export function AddPost({ onClose, onCreate }) {
    const [imagePreview, setImagePreview] = useState(null);
    const [caption, setCaption] = useState(""); // ← 追加

    function handleImage(e) {
        const file = e.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setImagePreview(url);
    }

    function createPost() {
        if (!imagePreview) return;

        const newPost = {
            id: Date.now(),
            user: "you",
            image: imagePreview,
            caption: caption,
            liked: false,
        };

        onCreate(newPost);
        onClose();
    }

    return (
        <div className="add-post-overlay">
            <div className="add-post-container">
                <div className="add-post-text">
                    <h2>新規投稿</h2>
                </div>
                {/* 画像アップロード */}
                <input type="file" onChange={handleImage} />

                {/* プレビュー表示 */}
                {imagePreview && (
                    <div className="preview">
                        <img src={imagePreview} alt="preview" />
                    </div>
                )}

                {/* 説明文入力 */}
                <textarea
                    className="caption-input"
                    placeholder="説明文を入力..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                ></textarea>

                <div className="buttons">
                    <button onClick={onClose}>閉じる</button>
                    <button onClick={createPost}>投稿</button>
                </div>
            </div>
        </div>
    );
}

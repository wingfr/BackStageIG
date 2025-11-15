import { useState } from "react";
import { SideBar } from "../Components/SideBar";
import { Posts } from "../Components/Posts";
import { AddPost } from "../Components/AddPost";
import "./TopPage.css";

export function TopPage() {
    const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    function toggleLike(index) {
        setPosts(prev =>
            prev.map((p, i) =>
                i === index
                    ? {
                        ...p,
                        liked: !p.liked,
                        likes: p.liked ? p.likes - 1 : p.likes + 1
                    }
                    : p
            )
        );
    }
    function ShowCreatePost() {
        setIsCreatePostOpen(true);
    }
    function closeCreatePost() {
        setIsCreatePostOpen(false);
    }
    function addPost(newPost) {
        setPosts([newPost, ...posts]); // 上に追加
        closeCreatePost();
    }
    return (
        <>
            <div className="top-page-container">
                <SideBar
                    className="top-page-side-bar"
                    onPlusClick={ShowCreatePost}
                />
                <div className="top-page-post">
                    <Posts posts={posts} onToggleLike={toggleLike} />
                </div>
            </div>
            {isCreatePostOpen && (
                <AddPost onClose={closeCreatePost} onCreate={addPost} />
            )}
        </>
    );
}
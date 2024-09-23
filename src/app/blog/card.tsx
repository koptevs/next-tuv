"use client";
import React, { useState } from "react";

type PostCardProps = {
    title?: string;
};

function PostCard({ title }: PostCardProps) {
    const [count, setCount] = useState(0);
    const handleClickEvent = () => setCount((prev) => prev + 1);
    if (!title) {
        return <div>Empty</div>;
    }
    return (
        <div className="mb-2 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h3
                className="mb-2 cursor-pointer text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                onClick={handleClickEvent}
            >
                {title} - {count}
            </h3>
        </div>
    );
}

export default PostCard;

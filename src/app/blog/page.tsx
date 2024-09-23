import React from "react";
import getPublicDomain from "@/lib/get-public-domain";
import PostCard from "./card";

// fetch cashing options
// force-cash
// revalidate: n seconds
// no-store

async function getData() {
    const domain = await getPublicDomain();
    const endpoint = `${domain}/api/posts`;
    // const response = await fetch(endpoint, {
    //     next: {
    //         revalidate: 10,
    //     },
    // });
    const response = await fetch(endpoint, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Data fetch failed.");
    }
    // console.log(response);
    if (response.headers.get("content-type") !== "application/json") {
        return [{}];
    }

    return response.json();
}

export default async function Blog() {
    const data = await getData();
    console.log("DATA: ", data);

    return (
        <div className="container">
            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
            <h1>BLOG</h1>
            <ol>
                {data &&
                    data.map((item: { id: number; title: string }) => (
                        // <li key={`post${item.id}`}>{item.title}</li>
                        <PostCard key={`post${item.id}`} title={item.title} />
                    ))}
            </ol>
        </div>
    );
}

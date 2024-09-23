"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GithubPage() {
    const myGithubRepo = "https://api.github.com/repos/koptevs/next-tuv";
    const { data, error, isLoading } = useSWR(myGithubRepo, fetcher);
    if (error) {
        return <div className="container">Error occured</div>;
    }
    if (isLoading) {
        return <div className="container">Loading...</div>;
    }
    return (
        <div className="container">
            <h3>{data.name}</h3>
        </div>
    );
}

"use client";

import React, { useEffect } from "react";

export default function Error({
    error,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset,
}: {
    error: string;
    reset: React.FC;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return <div>Something went wrong - root boundary!</div>;
}

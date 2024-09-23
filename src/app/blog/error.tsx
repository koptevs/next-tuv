"use client";

import React, { useEffect } from "react";

export default function Error({
    error,
    // reset,
}: {
    error: string;
    reset?: React.FC;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="container">
            <p>Something went wrong - blog boundary!</p>
            <button
                className="mt-2 rounded-md bg-red-300 px-4 py-2 font-semibold text-white"
                // onClick={() => reset()}
            >
                Reset
            </button>
        </div>
    );
}

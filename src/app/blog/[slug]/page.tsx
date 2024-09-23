import React from "react";

type ParamsType = {
    params: { slug: string };
    searchParams: unknown;
};

export default function BlogPost({ params }: ParamsType) {
    console.log(params.slug);
    return <div>BlogPost - {params.slug}</div>;
}

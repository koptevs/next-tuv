import { NextResponse } from "next/server";

type ContextType = { params: { slug: string } };

export async function GET(request: Request, context: ContextType) {
    // console.log("REQUEST:  ", request);
    // console.log("CONTEXT:  ", context);

    return NextResponse.json({ hello: `World-${context.params.slug}` });
}

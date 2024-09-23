import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type ContextType = { params: { slug: string } };

export async function GET(request: NextApiRequest, context: ContextType) {
    // console.log("REQUEST:  ", request);
    // console.log("CONTEXT:  ", context);

    return NextResponse.json({ hello: `World-${context.params.slug}` });
}

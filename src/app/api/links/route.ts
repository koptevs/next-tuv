import { NextResponse } from "next/server";

// export async function GET() {
//     return NextResponse.json({ hello: "World" });
// }
export async function POST(request: Request) {
    const contentType = await request.headers.get("content-type");
    if (contentType !== "application/json") {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const data = await request.json();
    return NextResponse.json(data, { status: 201 }); // 201 - Created
}

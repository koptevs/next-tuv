import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        { id: 1, title: "First Title" },
        { id: 2, title: "Second Title" },
        { id: 3, title: "Third Title" },
        { id: 4, title: "Fourth Title" },
    ]);
}
export async function POST() {
    return NextResponse.json({ hello: "POST" });
}

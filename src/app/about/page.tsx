import { getDbData } from "@/lib/db";
import React from "react";

const About = async () => {
    const dbData = await getDbData();
    console.log(dbData);

    return (
        <div className="container">
            <h3>About{JSON.stringify(dbData)}</h3>
        </div>
    );
};

export default About;
export const revalidate = 10;
export const runtime = "edge";
export const preferredRegion = "fra1"; // See Vercel project functions

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
export const runtime = "edge";

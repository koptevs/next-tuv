"use client";

export default function Form() {
    const handleForm = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const JSONData = JSON.stringify(data);
        const endpoint = "/api/links/";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONData,
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(result);
    };
    return (
        <>
            <form onSubmit={handleForm} className="flex flex-col">
                <label htmlFor="url">Enter your URL here</label>
                <input
                    id="url"
                    type="text"
                    name="url"
                    defaultValue="something.long.com"
                    className="border-2 p-1"
                />
                <label htmlFor="url2">Enter your URL here</label>
                <input
                    id="url2"
                    type="text"
                    name="url2"
                    defaultValue="something.long.com"
                    className="border-2 p-1"
                />
                <button className="mt-1 w-24 rounded-sm bg-red-400 p-2 text-white">
                    Submit
                </button>
            </form>
        </>
    );
}

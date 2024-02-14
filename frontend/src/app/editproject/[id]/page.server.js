// src/app/editproject/[id]/page.server.js
export async function loader({ params }) {
    console.log("Params recibidos en loader:", params);
    return {
        props: {
            id: params.id,
        },
    };
}
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNote } from "./NoteLayout";

export function NoteDetails() {
    const note = useNote();

    return (
        <>
            <div>
                <h1>{note.title}</h1>
                <ReactMarkdown>{note.description}</ReactMarkdown>
            </div>
        </>
    )
}
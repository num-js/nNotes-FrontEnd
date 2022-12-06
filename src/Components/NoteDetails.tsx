import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { useNote } from "./NoteLayout";

export function NoteDetails() {
    const note = useNote();

    return (
        <>
            <section className="relative text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex justify-between">
                        <h1 className="mb-2 text-2xl font-medium text-gray-900 title-font sm:mb-0">{note.title}</h1>
                        <div className="flex">
                            <Link to={`/${note.id}/edit-note`}>
                                <button type="submit" className="px-8 py-2 mr-4 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Edit</button>
                            </Link>
                            <button className="px-8 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                    <ReactMarkdown>{note.description}</ReactMarkdown>
                </div>
            </section>
        </>
    )
}
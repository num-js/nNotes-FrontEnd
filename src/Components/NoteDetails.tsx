import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { useNote } from "./NoteLayout";
import PopupModal from "./Modal/PopupModal";

type NoteDetailsProps = {
    onDeleteNote: (id: string) => void
}

export function NoteDetails({ onDeleteNote }: NoteDetailsProps) {
    const note = useNote();

    const [popupModal, setPopupModal] = useState("");

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
                            <button className="px-8 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
                                onClick={() => setPopupModal("deleteModal")}
                            >Delete</button>
                        </div>
                    </div>
                    <ReactMarkdown>{note.description}</ReactMarkdown>
                </div>
            </section>

            <PopupModal
                popupModal={popupModal}
                setPopupModal={setPopupModal}
            >
                <>
                    <div className="items-center md:flex">
                        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 border border-gray-300 rounded-full">
                            <span className="text-3xl">?</span>
                        </div>
                        <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
                            <p className="font-bold">Delete Note?</p>
                            <p className="mt-1 text-sm text-gray-700">
                                {note.title}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 text-center md:text-right md:flex md:justify-end">
                        <button className="block w-full px-4 py-3 text-sm font-semibold text-red-700 bg-red-200 rounded-lg md:inline-block md:w-auto md:py-2 md:ml-2 md:order-2"
                            onClick={() => { setPopupModal(""); onDeleteNote(note.id); }}
                        >Delete</button>
                        <button className="block w-full px-4 py-3 mt-4 text-sm font-semibold bg-gray-200 rounded-lg md:inline-block md:w-auto md:py-2 md:mt-0 md:order-1"
                            onClick={() => setPopupModal("")}
                        >Cancel</button>
                    </div>
                </>
            </PopupModal>
        </>
    )
}
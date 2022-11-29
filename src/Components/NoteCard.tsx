import { Link } from "react-router-dom"
import { Note } from "../App"

type NoteCardProps = {
    note: Note
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <>
            <div className="p-4 md:w-1/3">
                <Link to={`/${note.id}`}>
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                            <h2 className="text-lg font-medium text-gray-900 title-font">{note.title}</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="text-base leading-relaxed">
                                {note.description}
                            </p>
                            <a className="inline-flex items-center mt-3 text-indigo-500">Read More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
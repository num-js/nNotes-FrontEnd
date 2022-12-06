import { Navigate, Outlet, useOutlet, useOutletContext, useParams } from "react-router-dom";
import { Note } from "../App";

type NoteLayoutProps = {
    notes: Note[]
}

export function NoteLayout({ notes }: NoteLayoutProps) {
    const { id } = useParams();
    const note = notes.find(noteRaw => noteRaw.id === id);
    console.log("note", note);

    if (!note) return <Navigate to="/" replace />

    return (
        <Outlet context={note} />
    );
}

export function useNote() {
    return useOutletContext<Note>();
}
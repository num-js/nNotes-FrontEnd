import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom';
import ReactSelect from 'react-select';
import { NoteCard } from '../Components/NoteCard'
import { Note, Tag } from '../App';

type HomeProps = {
    availableTags: Tag[]
    notes: Note[]
}

const Home = ({ availableTags, notes }: HomeProps) => {

    const [title, setTitle] = useState('');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);



    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (
                (
                    title === "" ||
                    note.title.toLowerCase().includes(title.toLowerCase()))
            ) &&
                (
                    selectedTags.length === 0 ||
                    selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)
                    )
                )
        });
    }, [title, selectedTags, notes]);

    return (
        <>
            <section className="relative text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="mb-2 text-2xl font-medium text-gray-900 title-font sm:mb-0">Notes</h1>
                            <div className="flex">
                                <Link to="/new-note">
                                    <button type="submit" className="px-8 py-2 mr-4 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Add Note</button>
                                </Link>
                                <button className="px-8 py-2 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600"
                                >Edit Tags</button>
                            </div>
                        </div>
                        <div className="h-1 overflow-hidden bg-gray-200 rounded">
                            <div className="w-40 h-full bg-indigo-500"></div>
                        </div>
                    </div>

                    <div>
                        <div className="mx-auto">
                            <form onSubmit={undefined}>
                                <div className="flex flex-wrap -m-2">
                                    <div className="w-1/2 p-2">
                                        <div className="relative">
                                            <label htmlFor="name" className="text-sm leading-7 text-gray-600">Title</label>
                                            <input type="text" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="relative">
                                            <label htmlFor="email" className="text-sm leading-7 text-gray-600">Topics</label>
                                            <ReactSelect className="text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none"
                                                isMulti
                                                options={availableTags.map(tag => {
                                                    return { label: tag.label, value: tag.id }
                                                })}
                                                value={selectedTags.map(tag => {
                                                    return { label: tag.label, value: tag.id }
                                                })}
                                                onChange={tags => {
                                                    setSelectedTags(tags.map(tag => {
                                                        return { label: tag.label, id: tag.value }
                                                    }))
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col pt-4 my-8">
                        <div className="flex justify-between">
                            <h1 className="mb-2 text-2xl font-medium text-gray-900 title-font sm:mb-0">All Notes</h1>
                        </div>
                        <div className="h-1 overflow-hidden bg-gray-200 rounded">
                            <div className="w-40 h-full bg-indigo-500"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        {
                            filteredNotes.map(note => (
                                <NoteCard note={note} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
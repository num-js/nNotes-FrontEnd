import { useState, useRef, FormEvent } from 'react'
import CreatableReactSelect from 'react-select/creatable';
import { Link } from 'react-router-dom'
import { NoteData, Tag } from '../App';

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (data: Tag) => void
    availableTags: Tag[]
}

export default function NewNote({ onSubmit, onAddTag, availableTags }: NoteFormProps) {

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const [tags, setTags] = useState<Tag[]>([]);

    const saveNewNote = (event: FormEvent) => {
        event.preventDefault();
        onSubmit({
            title: titleRef.current!.value,
            description: descriptionRef.current!.value,
            tags: tags,
        });
    }

    return (
        <>
            <section className="relative text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">


                    <div className="flex flex-col">
                        <h1 className="mb-2 text-2xl font-medium text-gray-900 title-font sm:mb-0">Add New Note</h1>
                        <div className="h-1 overflow-hidden bg-gray-200 rounded">
                            <div className="w-40 h-full bg-indigo-500"></div>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <form onSubmit={saveNewNote}>
                            <div className="flex flex-wrap -m-2">
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Title</label>
                                        <input ref={titleRef} type="text" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                        <label htmlFor="email" className="text-sm leading-7 text-gray-600">Topics</label>
                                        <CreatableReactSelect className="text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none"
                                            isMulti
                                            options={availableTags.map(tag => {
                                                return { label: tag.label, value: tag.id }
                                            })}
                                            onCreateOption={label => {
                                                const tagIdRaw = Date.now();
                                                const tagId = '' + tagIdRaw;
                                                const newTag = {
                                                    id: tagId,
                                                    label
                                                }
                                                onAddTag(newTag);
                                                setTags(prevTag => [...prevTag, newTag]);
                                            }}
                                            value={tags.map(tag => {
                                                return { label: tag.label, value: tag.id }
                                            })}
                                            onChange={tags => {
                                                setTags(tags.map(tag => {
                                                    return { label: tag.label, id: tag.value }
                                                }))
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="w-full p-2">
                                    <div className="relative">
                                        <label htmlFor="description" className="text-sm leading-7 text-gray-600">Description</label>
                                        <textarea id="description" ref={descriptionRef} className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
                                    </div>
                                </div>
                                <div className="flex w-full justify-items-center">
                                    <Link to="..">
                                        <button className="px-8 py-2 mr-4 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">Cancel</button>
                                    </Link>
                                    <button type="submit" className="px-8 py-2 ml-4 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
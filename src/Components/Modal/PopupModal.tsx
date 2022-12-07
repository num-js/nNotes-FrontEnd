import './modal.css';

type PopupModalProps = {
    popupModal: string
    setPopupModal: (modalId: string) => void
    children: JSX.Element
}

export default function PopupModal({ popupModal, setPopupModal, children }: PopupModalProps) {

    return (
        <>
            <main className={`absolute top-0 w-full overflow-x-hidden font-sans antialiased text-gray-900 ${popupModal === "deleteModal" ? "" : "hidden"}`}
                onClick={() => setPopupModal("")}
            >
                <div className="relative min-h-screen px-4 md:flex md:items-center md:justify-center">
                    <div className="absolute inset-0 z-10 w-full h-full bg-black opacity-25"></div>
                    <div className="fixed inset-x-0 bottom-0 z-50 p-4 mx-4 mb-4 bg-white rounded-lg md:max-w-md md:mx-auto md:relative md:min-w-450"
                        onClick={(event) => { event.preventDefault(); event.stopPropagation(); }}
                    >
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}

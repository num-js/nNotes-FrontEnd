import { Link } from "react-router-dom";

type HeaderProps = {
    setPopupModal: (modalId: string) => void
}

export default function Header({ setPopupModal }: HeaderProps) {
    return (
        <>
            <header className="p-4 pb-0 bg-gray-100 border-b shadow-lg md:flex md:items-center md:justify-between md:pb-4">

                {/* <!--logo--> */}
                <div>
                    <Link to="/">
                        <div
                            className="mr-2"
                            style={{
                                backgroundImage: `url(https://numan-dev.web.app/nlogo.png)`,
                                width: '35px',
                                height: '35px',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                borderRadius: "50%",
                            }}
                        />
                    </Link>
                </div>

                {/* <!--title--> */}
                <div className="flex items-center justify-between mb-4 md:mb-0">
                    <div className="flex justify-between">
                        <Link to="/">
                            <h1 className="mb-2 text-2xl font-medium text-gray-900 title-font sm:mb-0">n_Notes</h1>
                        </Link>
                    </div>

                    {/* <!--bar--> */}
                    <a href="#" className="text-black md:hidden hover:text-orange">
                        <i className="fa fa-2x fa-bars"></i>
                    </a>
                </div>

                {/* <!--nav--> */}
                <nav>
                    <ul className="text-xl list-reset md:flex md:items-center">
                        <li className="md:ml-4">
                            <Link to="/">
                                <a href="#" className="block py-2 no-underline text-grey-darkest md:border-none md:p-0 hover:underline">Home</a>
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <Link to="/new-note">
                                <a href="#" className="block py-2 no-underline border-t text-grey-darkest hover:underline hover:text-black md:p-0 md:border-none">
                                    Add Note
                                </a>
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <a href="#" className="block py-2 no-underline border-t text-grey-darkest hover:underline hover:text-black md:p-0 md:border-none"
                                onClick={() => setPopupModal("tagsModal")}
                            >Manage Tags</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

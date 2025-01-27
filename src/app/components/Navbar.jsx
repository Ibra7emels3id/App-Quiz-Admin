import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const Navbar = ({ showNavBar }) => {
    return (
        <>
            <nav className={`md:${showNavBar}  flex lg:min-w-[250px] w-max max-lg:min-w-8`}>
                <div
                    id="sidebar-collapse-menu"
                    style={{ height: "calc(100vh - 72px)" }}
                    className={`${showNavBar === 'visible' ? '' : 'lg:w-max max-lg:w-0 max-lg:invisible'} bg-white shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px]  transition-all duration-500`}
                >
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-[18px] h-[18px] mr-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                                        data-original="#000000"
                                    />
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <h6 className="text-blue-600 text-sm font-bold px-4">
                            Information
                        </h6>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link
                                    href="/audience"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-3"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Audience</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/audience/addUser"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Add User</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h6 className="text-blue-600 text-sm font-bold px-4">Quiz</h6>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link
                                    href="/first-quiz"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg className="w-[18px] h-[18px] mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#494c4e" cx="6" cy="12" r="2"></circle> <path fill="#494c4e" d="M8.708 5.717l-1.954 1.96c-.25.243-.61.37-.958.307C5.5 7.93 4.64 7.327 4.458 7.21c-.46-.29-.6-.91-.3-1.383.29-.46.91-.602 1.38-.3l.32.2 1.43-1.435c.39-.39 1.03-.39 1.42 0 .39.392.39 1.034 0 1.425z"></path> <path fill="#494c4e" d="M20 7c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <circle fill="#494c4e" cx="6" cy="18" r="2"></circle> <path fill="#494c4e" d="M20 13c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1zM20 19c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <path fill="#494c4e" d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 21.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v19z"></path> </g></svg>
                                    <span>First floor</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/second-quiz"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg className="w-[18px] h-[18px] mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#494c4e" cx="6" cy="12" r="2"></circle> <path fill="#494c4e" d="M8.708 5.717l-1.954 1.96c-.25.243-.61.37-.958.307C5.5 7.93 4.64 7.327 4.458 7.21c-.46-.29-.6-.91-.3-1.383.29-.46.91-.602 1.38-.3l.32.2 1.43-1.435c.39-.39 1.03-.39 1.42 0 .39.392.39 1.034 0 1.425z"></path> <path fill="#494c4e" d="M20 7c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <circle fill="#494c4e" cx="6" cy="18" r="2"></circle> <path fill="#494c4e" d="M20 13c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1zM20 19c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <path fill="#494c4e" d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 21.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v19z"></path> </g></svg>
                                    <span>Second floor</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/third-quiz"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg className="w-[18px] h-[18px] mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#494c4e" cx="6" cy="12" r="2"></circle> <path fill="#494c4e" d="M8.708 5.717l-1.954 1.96c-.25.243-.61.37-.958.307C5.5 7.93 4.64 7.327 4.458 7.21c-.46-.29-.6-.91-.3-1.383.29-.46.91-.602 1.38-.3l.32.2 1.43-1.435c.39-.39 1.03-.39 1.42 0 .39.392.39 1.034 0 1.425z"></path> <path fill="#494c4e" d="M20 7c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <circle fill="#494c4e" cx="6" cy="18" r="2"></circle> <path fill="#494c4e" d="M20 13c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1zM20 19c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <path fill="#494c4e" d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 21.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v19z"></path> </g></svg>
                                    <span>Third floor</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fourth-quiz"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg className="w-[18px] h-[18px] mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#494c4e" cx="6" cy="12" r="2"></circle> <path fill="#494c4e" d="M8.708 5.717l-1.954 1.96c-.25.243-.61.37-.958.307C5.5 7.93 4.64 7.327 4.458 7.21c-.46-.29-.6-.91-.3-1.383.29-.46.91-.602 1.38-.3l.32.2 1.43-1.435c.39-.39 1.03-.39 1.42 0 .39.392.39 1.034 0 1.425z"></path> <path fill="#494c4e" d="M20 7c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <circle fill="#494c4e" cx="6" cy="18" r="2"></circle> <path fill="#494c4e" d="M20 13c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1zM20 19c0 .55-.45 1-1 1h-8.01c-.55-.01-.99-.45-.99-1s.44-.99.99-1H19c.55 0 1 .45 1 1z"></path> <path fill="#494c4e" d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 21.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v19z"></path> </g></svg>
                                    <span>Fourth floor</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h6 className="text-blue-600 text-sm font-bold px-4">Actions</h6>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-3"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li>
                                <button
                                    type='button'
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        toast.success('logout success')
                                        window.location.reload();
                                    }}
                                    className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all w-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-3"
                                        viewBox="0 0 6.35 6.35"
                                    >
                                        <path
                                            d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

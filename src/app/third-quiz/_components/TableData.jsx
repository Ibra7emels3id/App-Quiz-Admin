'use client'
import { useAuth } from '@/app/context/Context';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import Dialog from './Dialog';

const TableData = () => {
    const { quizThird, fetchQuizThird } = useAuth()
    const [selectCheckbox, setSelectCheckbox] = React.useState([])
    const [showDialog, setShowDialog] = React.useState(false);
    const [quizId, setQuizId] = React.useState(false);

    // Handle Checkbox Change
    const HandleCheckboxChange = (id) => {
        if (selectCheckbox.includes(id)) {
            setSelectCheckbox(selectCheckbox.filter((it) => it !== id))
        } else {
            setSelectCheckbox([...selectCheckbox, id]);
        }
    }

    // Handle Delete Selected Quiz
    const HandleDeleteSelect = async () => {
        if (selectCheckbox.length > 0) {
            if (confirm('Are you sure you want to delete selected quiz')) {
                try {
                    const res = await axios.delete(`${process.env.NEXT_PUBLIC_SOME_URL}/api/third-quiz/selected`, { data: { ids: selectCheckbox } })
                    if (res.status === 200) {
                        toast.info(res.data.message)
                        fetchQuizThird()
                        setSelectCheckbox([])
                    }
                    console.log('Selected Quiz deleted successfully', res);
                } catch (error) {
                    console.error('Error deleting selected quiz:', error);
                }
            }
        } else {
            toast.info('No quiz selected to delete')
        }
    }

    // Handle Delete All Quiz
    const HandleDeleteAllQuiz = async () => {
        if (quizThird.length > 0) {
            if (confirm('Are you sure you want to delete')) {
                try {
                    const res = await axios.delete(`${process.env.NEXT_PUBLIC_SOME_URL}/api/third-quiz`)
                    if (res.status === 200) {
                        toast.info(res.data.message)
                        fetchQuizThird()
                    }
                    console.log('All Quiz deleted successfully', res);
                } catch (error) {
                    console.error('Error deleting all quiz:', error);
                }
            }
        } else {
            toast.info('No Quiz found to delete', {
                position: "top-center",
                autoClose: 2000,
            })
        }
    };

    // Handle Delete Id Show Alert  
    const HandleShowDialog = (id) => {
        showDialog ? setShowDialog(false) || setQuizId("") : setQuizId(id) || setShowDialog(true)
    }

    return (
        <>
            <section className="main-content w-full overflow-auto p-6">
                <div className="w-full flex items-center justify-around">
                    <Link className='w-[150px] bg-blue-600 hover:bg-blue-800 text-white block text-center my-3 py-2 ' href={'/third-quiz/third-floor'}>Add User</Link>
                    <button type='submit' onClick={HandleDeleteAllQuiz} className=' w-[150px] text-white bg-red-500 py-2'>Delete All Quiz</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 whitespace-nowrap">
                            <tr>
                                <th>
                                    <button className='' type='submit' onClick={HandleDeleteSelect}>
                                        <svg
                                            className='hover:fill-red-500 flex'
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            stroke="#ffffff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.10002 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H4.06055L4.88474 20.1871C4.98356 21.7682 6.29471 23 7.8789 23H16.1211C17.7053 23 19.0164 21.7682 19.1153 20.1871L19.9395 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.0073C19.0018 4.99995 18.9963 4.99995 18.9908 5H16.9C16.4367 2.71776 14.419 1 12 1C9.58104 1 7.56329 2.71776 7.10002 5ZM9.17071 5H14.8293C14.4175 3.83481 13.3062 3 12 3C10.6938 3 9.58254 3.83481 9.17071 5ZM17.9355 7H6.06445L6.88085 20.0624C6.91379 20.5894 7.35084 21 7.8789 21H16.1211C16.6492 21 17.0862 20.5894 17.1192 20.0624L17.9355 7ZM14.279 10.0097C14.83 10.0483 15.2454 10.5261 15.2068 11.0771L14.7883 17.0624C14.7498 17.6134 14.2719 18.0288 13.721 17.9903C13.17 17.9517 12.7546 17.4739 12.7932 16.9229L13.2117 10.9376C13.2502 10.3866 13.7281 9.97122 14.279 10.0097ZM9.721 10.0098C10.2719 9.97125 10.7498 10.3866 10.7883 10.9376L11.2069 16.923C11.2454 17.4739 10.83 17.9518 10.2791 17.9903C9.72811 18.0288 9.25026 17.6134 9.21173 17.0625L8.79319 11.0771C8.75467 10.5262 9.17006 10.0483 9.721 10.0098Z"
                                                    fill="#eee"
                                                    className='hover:fill-red-500'
                                                />{" "}
                                            </g>
                                        </svg>
                                    </button>
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    UserId
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    Name
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    Academic Year
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    quiz Id
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    Score
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    End
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    Water Result
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-white">
                                    Joined At
                                </th>
                                <th className="p-4 text-center text-sm font-medium text-white">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap">
                            {quizThird?.map((it) => {
                                return (
                                    <tr key={it._id}>
                                        <td className="p-4 text-sm"><input onChange={() => {
                                            HandleCheckboxChange(it._id)
                                        }} type="checkbox" name={it._id} id={it._id} /></td>
                                        <td className="p-4 text-sm">#{it?.userId.slice(0, 3)}</td>
                                        <td className="p-4 text-sm">{it?.name}</td>
                                        <td className="p-4 text-sm">{it?.AcademicYear}</td>
                                        <td className="p-4 text-sm">{it?.quizId}</td>
                                        <td className="p-4 text-sm">{it?.score}</td>
                                        <td className="p-4 text-sm">{it?.end}</td>
                                        <td className="p-4 text-sm">{it?.WaterResult}%</td>
                                        <td className="p-4 text-sm">{it?.date.split('T')[0]}</td>
                                        <td className="p-4 text-center">
                                            <button onClick={() => {
                                                HandleShowDialog(it._id)
                                            }} className="text-center" title="Delete">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 fill-red-500 hover:fill-red-700"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                        data-original="#000000"
                                                    />
                                                    <path
                                                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                        data-original="#000000"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <Dialog showDialog={showDialog} HandleShowDialog={HandleShowDialog} quizId={quizId} />
                    </table>
                </div>
            </section>
        </>
    );
}

export default TableData;

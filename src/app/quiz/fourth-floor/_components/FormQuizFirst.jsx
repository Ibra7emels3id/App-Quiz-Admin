import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FormQuizFirst = () => {
    const [formData, setFormData] = useState({});
    const [answers, setAnswers] = useState(['']);
    const [error, setError] = useState('');


    // Handle answer change events
    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    // Add answer field
    const addAnswerField = () => {
        setAnswers([...answers, '']);
    };

    // Remove answer field
    const removeAnswerField = (index) => {
        const newAnswers = [...answers];
        newAnswers.splice(index, 1);
        setAnswers(newAnswers);
    };

    // Handle change events
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    // handle Send Question
    const HandleSubmitQuestion = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SOME_URL}/api/fourth-question`, {
                Question: formData.Question,
                answers: answers,
                ans: formData.answer
            });
            toast.success(res.data.message);
            setFormData({
                Question: '',
                answers: [''],
                answer: ''
            });
            setAnswers([''])
        } catch (error) {
            setError('Failed to send question');
        }
    };


    return (
        <>
            <div className="h-screen w-full">
                <div className="flex flex-col w-[600px] m-auto mt-10">
                    <form className='flex flex-col bg-[#eee] gap-3 p-5'>
                        <label className='text-center font-extrabold text-3xl my-3'>Quiz Fourth Floor</label>
                        <input onChange={handleChange} value={formData.Question} className='h-10 px-2 rounded-sm outline-none border-none focus:outline-none focus:border-none' type="text" name='Question' placeholder="Question" />
                        {answers.map((answer, index) => (
                            <div key={index} className='flex items-center justify-center w-full'>
                                <input
                                    className='h-10 px-2 rounded-sm outline-none border-none focus:outline-none focus:border-none w-full'
                                    type="text"
                                    value={answer}
                                    placeholder={`answer ${index + 1}`}
                                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    required
                                />
                                <button type='button' onClick={() => removeAnswerField(index)} className='h-6  flex items-center justify-center'>
                                    <svg className='w-8 ml-2 hover:fill-red-600' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel</title> <path d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"></path> </g></svg>
                                </button>
                                <br /><br />
                            </div>
                        ))}
                        <button className='bg-gray-400 py-2 text-white hover:bg-gray-600' type="button" onClick={addAnswerField}>
                            Add More Answers
                        </button>
                        <input onChange={handleChange} value={formData.answer} className='h-10 px-2 rounded-sm outline-none border-none focus:outline-none focus:border-none' type="text" name='answer' placeholder='answer' />
                        <button onClick={HandleSubmitQuestion} className='h-12 bg-blue-700 mt-5 text-white text-xl' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormQuizFirst;

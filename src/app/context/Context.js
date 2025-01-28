'use client'
import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
const AuthContext = createContext([]);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);;
    const [users, setUsers] = useState([]);
    const [quizFirst, setQuizFirst] = useState(null);
    const [quizSecond, setQuizSecond] = useState(null);
    const [quizThird, setQuizThird] = useState(null);
    const [quizFourth, setQuizFourth] = useState(null);;

    // Handle Login Get Data
    const fetchData = useCallback(async () => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        try {
            setLoading(true);
            // Get the token from localStorage
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SOME_URL}/api/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Set the user data
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    }, []);


    // Get All Users 
    const fetchAllUsers = useCallback(async () => {
        // fetch User data
        try {
            setLoading(true)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SOME_URL}/api/users`)
            setUsers(response.data.users);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, []);

    // Get Quiz First 
    const fetchQuizFirst = useCallback(async () => {
        // fetch User data
        try {
            setLoading(true)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SOME_URL}/api/first-quiz`)
            setQuizFirst(response.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, []);

    // Get Quiz Second 
    const fetchQuizSecond = useCallback(async () => {
        // fetch User data
        try {
            setLoading(true)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SOME_URL}/api/second-quiz`)
            setQuizSecond(response.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, []);

    // Get Quiz Third 
    const fetchQuizThird = useCallback(async () => {
        // fetch User data
        try {
            setLoading(true)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SOME_URL}/api/third-quiz`)
            setQuizThird(response.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, []);

    // Get Quiz Fourth 
    const fetchQuizFourth = useCallback(async () => {
        // fetch User data
        try {
            setLoading(true)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SOME_URL}/api/fourth-quiz`)
            setQuizFourth(response.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, []);

    // Handle Fetch User Data
    useEffect(() => {
        fetchData()
        fetchAllUsers()
        fetchQuizSecond()
        fetchQuizFirst()
        fetchQuizThird()
        fetchQuizFourth()
    }, [fetchData])




    return (
        <AuthContext.Provider value={{ user, loading, users, fetchData, fetchAllUsers, quizFirst, fetchQuizFirst, quizSecond, fetchQuizSecond, quizThird, fetchQuizThird, quizFourth, fetchQuizFourth }}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = () => useContext(AuthContext);
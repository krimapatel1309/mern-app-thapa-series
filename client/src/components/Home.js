import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../App';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const { state, dispatch } = useContext(UserContext);

    const userHomePage = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getdata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);
            dispatch({ type: 'USER', payload: true });

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <h2> { show ? 'Happy, to see you back' :  'We Are The MERN Developer' }</h2>
                </div>
            </div>
            
        </>
    )
}

export default Home

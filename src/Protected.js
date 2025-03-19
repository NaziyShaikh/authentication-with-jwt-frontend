import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = () => {
    const [data, setData] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/protected', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const result = await response.text();
                setData(result);
            } else {
                setData('Access denied');
            }
        };

        fetchData();
    }, [navigate]); // Include navigate in the dependency array

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <h2>Protected Content</h2>
            <p>{data}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Protected;
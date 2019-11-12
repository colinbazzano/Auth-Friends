import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const AddFriend = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth() 
            .post('/api/friends', {name, age, email})
            .then(res => console.log(res))
            .catch(error => console.error(error));

        setName('');
        setAge('');
        setEmail('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type="submit">Add A Friend</button>
            </form>
        </div>
    )
};

export default AddFriend;
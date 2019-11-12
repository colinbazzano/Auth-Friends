import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))
            .catch(error => console.error(error));
    }, [friends]);

    const renderFriends = () => {
        return friends.map(friend => {
            return (
                <div key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            );
        });
    };

    return(
        <div>
            <AddFriend />
            FriendsList: {renderFriends()}
        </div>
    );
};

export default FriendsList;
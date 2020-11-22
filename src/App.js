import React from 'react';
import Profile from './components/Profile/Profile';
import './App.css';
import user from './data/user.json'
import Statistics from './components/Statistics'
import statisticalData from './data/statistical-data.json'
import friends from './data/friends.json';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import items from './data/transactions.json'


function App() {
    return <>
        <Profile user={user} />
        <Statistics title='UPLOAD STATS' stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={items}/>
        </>
}

export default App;
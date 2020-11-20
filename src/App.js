import React from 'react';
import Profile from './components/Profile/Profile';
import './App.css';
import user from './components/data/user.json'
import Statistics from './components/Statistics/Statistics'
import statisticalData from './components/data/statistical-data.json'
import friends from './components/data/friends.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './components/data/transactions.json'


function App() {
    return <>
        <Profile user={user} />
        <Statistics title='UPLOAD STATS' stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={items}/>
        </>
}

export default App;
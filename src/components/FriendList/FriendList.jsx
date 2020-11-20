import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from '../FriendItem/FriendItem'
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={styles.friendsList}>
    {friends.map(el => (<FriendItem key={el.id} arr={el} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
  el: PropTypes.object,
};

export default FriendList;

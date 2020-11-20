import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendItem = ({arr}) => (
  <li className={styles.item}>
    <span className={arr.isOnline ? styles.green : styles.red}>{arr.isOnline}</span>
    <img className={styles.avatar} src={arr.avatar} alt="" width="48" />
    <p className={styles.name}>{arr.name}</p>
</li>
);

FriendItem.propTypes = {
  arr: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default FriendItem;

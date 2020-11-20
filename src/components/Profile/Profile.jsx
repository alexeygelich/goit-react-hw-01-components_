import React from 'react';
import Stats from '../stats/Stats'
import style from './Profile.module.css'
import PropTypes from 'prop-types';


const Profile = ({ user }) => (
  <div className={style.profile}>
    <div className={style.description}>
    <img
        src={user.avatar}
        alt="user avatar"
        className={style.avatar}
    />
      <p className={style.name}>{user.name}</p>
      <p className={style.tag}>@{user.tag}</p>
      <p className={style.location}>{user.location}</p>
  </div>
      <Stats arr={ user.stats}/>
</div>
)

export default Profile;


Profile.prototypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
  })
}
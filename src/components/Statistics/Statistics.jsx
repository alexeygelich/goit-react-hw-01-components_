import React from 'react';
import PropTypes from 'prop-types';
import StatsticItem from '../Statstic-item/StatsticItem';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => ( <section className={styles.statistics}>
  {title && (<h2 className={styles.title}>{title}</h2>)}
  <ul className={styles['stat-list']}>
    {stats.map(el => { 
      return <StatsticItem key={el.id} arr={el}/>
    })}
    </ul>
</section>
)

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;

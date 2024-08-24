import PropTypes from 'prop-types'
import Loader from '../Loader/Loader'
import useFetchData from '../../hooks/useFetchData'
import fetchData from '../../js/fetchData'

import styles from './Details.module.css'

export default function Details({ id }) {
  const { data: userInfo, error, loading } = useFetchData(fetchData, id)

  if (loading) return <Loader />
  if (error) return <p>{error.message}</p>

  const {
    avatar,
    name,
    details: { city, company, position },
  } = userInfo

  return (
    <div
      className={styles.details}
      data-id={id}
    >
      <img
        src={avatar}
        alt={name}
      />
      <h4>{name}</h4>
      <div>{'City: ' + city}</div>
      <div>{'Company: ' + company}</div>
      <div>{'Position: ' + position}</div>
    </div>
  )
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
}

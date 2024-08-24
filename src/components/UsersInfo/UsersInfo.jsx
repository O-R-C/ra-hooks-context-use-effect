import { useState } from 'react'
import useFetchData from '../../hooks/useFetchData'
import List from '../List/List'
import Details from '../Details/Details'
import Loader from '../Loader/Loader'
import styles from './UsersInfo.module.css'

import fetchData from '../../js/fetchData'

export default function UsersInfo() {
  const [userId, setUserId] = useState(null)
  const { data: users, error, loading } = useFetchData(fetchData)

  const handleClick = (id) => {
    setUserId(id)
  }

  if (loading) return <Loader />
  if (error) return <p>{error.message}</p>

  return (
    <div className={styles.usersInfo}>
      <List
        users={users}
        onClick={handleClick}
      />

      {userId && <Details id={userId} />}
    </div>
  )
}

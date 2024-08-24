import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'
import styles from './List.module.css'

export default function List({ users, onClick }) {
  const handleClick = (evt) => {
    const id = Number(evt.target.dataset.id)
    if (!id) return
    onClick(id)
  }
  return (
    <div
      className={styles.list}
      onClick={handleClick}
    >
      {users.map((user) => (
        <ListItem
          key={user.id}
          {...user}
        />
      ))}
    </div>
  )
}

List.propTypes = {
  users: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

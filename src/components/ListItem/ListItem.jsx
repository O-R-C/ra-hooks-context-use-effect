import PropTypes from 'prop-types'
import styles from './ListItem.module.css'

export default function ListItem({ name, id }) {
  return (
    <div
      className={styles.listItem}
      data-id={id}
    >
      {name}
    </div>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

import React, { useContext } from 'react'
import moment from 'moment'
import DataContext from '../../../utils/context'

import styles from './ListItem.module.scss'

const ListItem = ({ note }) => {
    const { setCurrent } = useContext(DataContext)

    const setCurrentNote = (id) => {
        setCurrent(id)
    }

    return (
        <div className={styles.wrapper} onClick={() => setCurrentNote(note.id)}>
            {note.body ? (
                <p className={styles.title}>
                    {note.body.length > 25 ? note.body.slice(0, 25) + '...' : note.body}
                </p>
            ) : (
                <p className={styles.title}>Пустая заметка</p>
            )}
            <p className={styles.date}>
                {moment(note.date).format('DD.MM.YYYY')}
            </p>
        </div>
    )
}

export default ListItem
import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import { Button, Input } from 'antd'
import DataContext from '../../utils/context'

import styles from './Workspace.module.scss'

const { TextArea } = Input

const Workspace = ({ note, isEdit }) => {
    const [text, setText] = useState('Выберите или создайте заметку')
    const { notes, setNotes, current, setCurrent, setIsEdit } = useContext(DataContext)

    useEffect(() => {
        if (note) {
            setText(note.body)
        } else {
            setText('Выберите или создайте заметку')
        }
    }, [note])

    useEffect(() => {
        if (notes.length === 0) {
            setText('Создайте заметку')
            setCurrent('0')
        } else if (current === '0') {
            setText('Выберите или создайте заметку')
        }
    }, [notes, current, setCurrent])

    const onEditNote = (e) => {
        setText(e.target.value)

        const notesCopy = [...notes]
        const notesToEdit = notesCopy.findIndex((note) => note.id === current)
        notesCopy[notesToEdit].body = e.target.value
        notesCopy[notesToEdit].date = Date.now()

        setNotes([...notesCopy])
    }

    return (
        <div>
            <p className={styles.dateTitle}>
                {moment(Date.now()).format('DD MMMM YYYY HH:mm')}
            </p>
            {isEdit
                ? <div>
                    <TextArea
                        autoSize
                        style={{
                            border: 'none',
                            backgroundColor: 'white',
                        }}
                        bordered={false}
                        value={text}
                        onChange={onEditNote}
                    />
                    <Button onClick={() => setIsEdit(false)} style={{ marginTop: 20 }}>Сохранить</Button>
                </div>
                : <p className={styles.notEdit}>{text}</p>
            }
        </div>
    )
}

export default Workspace

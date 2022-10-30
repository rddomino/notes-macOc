import React, { useContext, useState } from 'react'
import { Layout } from 'antd'
import { v4 as uuid } from 'uuid'

import Dots from './components/Dots/Dots'
import AddNoteBtn from './components/Buttons/AddNoteBtn'
import EditNoteBtn from './components/Buttons/EditNoteBtn'
import DeleteNoteBtn from './components/Buttons/DeleteNoteBtn'
import Search from 'antd/lib/transfer/search'
import { Modal } from 'antd';

import DataContext from '../../utils/context'

import styles from './HeaderBar.module.scss'

const { Header } = Layout

const HeaderBar = () => {
    const { notes, setNotes, current, setIsEdit, setSearchPhrase } = useContext(DataContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAddNote = () => {
        const note = {
            id: uuid(),
            body: 'Пустая заметка',
            date: Date.now()
        }
        setNotes([...notes, note])
    }

    const onDeleteNote = () => {
        setIsModalOpen(true)
    }

    const onEditNote = () => {
        setIsEdit(true)
    }

    const onSearchNote = (e) => {
        setSearchPhrase(e.target.value)
    }

    const handleOk = () => {
        const newNotes = notes.filter(note => note.id !== current)
        setNotes([...newNotes])
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Header
                style={{
                    height: 34,
                    display: 'flex',
                    borderBottom: 0,
                    background: 'linear-gradient(180deg, rgba(240, 240, 240, 1) 0%, rgba(233, 233, 233, 1) 35%, rgba(221, 221, 221, 1) 100%)',
                    alignItems: 'center',
                    padding: 0,
                }}
            >
                <div className={styles.dotsContainer}>
                    <Dots />
                </div>
                <div className={styles.buttonsContainer}>
                    <AddNoteBtn onAddNote={onAddNote} />
                    <EditNoteBtn onEditNote={onEditNote} />
                    <DeleteNoteBtn onDeleteNote={onDeleteNote} />
                </div>
                <div className={styles.searchContainer}>
                    <Search
                        inputStyle={{
                            height: '24px',
                        }}
                        onChange={(e) => onSearchNote(e)}
                    />
                </div>
            </Header>

            <div>
                <Modal title="Подтверждение на удаление" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText="Отмена">
                    <p>Вы точно хотите удалить эту заметку?</p>
                </Modal>
            </div>
        </>
    )
}

export default HeaderBar

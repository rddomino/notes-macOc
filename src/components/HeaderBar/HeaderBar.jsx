import React from 'react'
import { Layout } from 'antd'

import Dots from './components/Dots/Dots'
import AddNoteBtn from './components/Buttons/AddNoteBtn'
import EditNoteBtn from './components/Buttons/EditNoteBtn'
import DeleteNoteBtn from './components/Buttons/DeleteNoteBtn'
import Search from 'antd/lib/transfer/search'

import styles from './HeaderBar.module.scss'

const { Header } = Layout

const HeaderBar = () => {
    return (
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
                <AddNoteBtn />
                <EditNoteBtn />
                <DeleteNoteBtn />
            </div>
            <div className={styles.searchContainer}>
                <Search
                    inputStyle={{
                        height: '24px',
                    }}
                />
            </div>
        </Header>
    )
}

export default HeaderBar

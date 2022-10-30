import React, { useState } from 'react'
import { Layout } from 'antd'

import HeaderBar from './components/HeaderBar/HeaderBar'
import Sidebar from './components/Sidebar/Sidebar'
import Workspace from './components/Workspace/Workspace'
import DataContext from './utils/context'

import 'antd/dist/antd.min.css'

const { Content } = Layout

const App = () => {
  const defaultState = {
    notes: [
      { id: '1', body: '1 Заметка стандартная', date: Date.now() },
      { id: '2', body: '2 Заметка стандартная', date: Date.now() },
      { id: '3', body: '3 Заметка стандартная', date: Date.now() },
    ],
    current: '0',
    isEdit: false,
    searchPhrase: '',
  }

  const [notes, setNotes] = useState(defaultState.notes)
  const [current, setCurrent] = useState(defaultState.current)
  const [isEdit, setIsEdit] = useState(defaultState.isEdit)
  const [searchPhrase, setSearchPhrase] = useState(defaultState.searchPhrase)

  return (
    <DataContext.Provider value={{
      notes,
      setNotes,
      current,
      setCurrent,
      isEdit,
      setIsEdit,
      searchPhrase,
      setSearchPhrase,
    }}>
      <Layout>
        <HeaderBar />
        <Layout>
          <Sidebar />
          <Content
            style={{
              padding: '20px 20px'
            }}
          >
            <Workspace note={(notes).find((note) => note.id === current)} isEdit={isEdit} />
          </Content>
        </Layout>
      </Layout>
    </DataContext.Provider>
  )
}

export default App;
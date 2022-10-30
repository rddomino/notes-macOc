import React, { useContext } from 'react'
import ListItem from './components/ListItem'
import DataContext from '../../utils/context'

const ListItems = () => {
    const { notes, searchPhrase } = useContext(DataContext)
    let notesToRender = notes
    notesToRender = notesToRender.filter((note) => note.body.toLowerCase().includes(searchPhrase.toLowerCase()))

    return (
        <>
            {
                notesToRender.length > 0
                    ? notesToRender.map(note => <ListItem note={note} key={note.id} />)
                    : 'Список заметок пуст'
            }
        </>
    )
}

export default ListItems

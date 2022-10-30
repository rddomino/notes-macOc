import React from 'react'
import { Layout } from 'antd'
import ListItems from '../ListItem/ListItems'

const { Sider } = Layout

const Sidebar = () => {
    return (
        <Sider
            theme="light"
            style={{
                overflow: 'auto',
                height: '100vh',
                left: 0,
                bottom: 0,
                padding: '20px 20px',
                borderRight: '1px solid #c5c5c5',
            }}
        >
            <ListItems />
        </Sider>
    )
}

export default Sidebar

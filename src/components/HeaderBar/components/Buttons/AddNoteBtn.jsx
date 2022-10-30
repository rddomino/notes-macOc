import React from 'react'
import { Button } from 'antd'
import { FileAddOutlined } from '@ant-design/icons'

import styles from './Button.module.scss'

const AddNoteBtn = () => (
  <Button
    className={styles.btn}
    style={{
      borderRadius: '4px',
      border: '1px solid #cccccc',
      backgroundColor: '#fbfbfb',
      height: '24px',
      width: '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '4px',
      hover: {
        backgroundColor: '#d6d6d6',
      }

    }}
  >
    <FileAddOutlined />
  </Button>
)

export default AddNoteBtn

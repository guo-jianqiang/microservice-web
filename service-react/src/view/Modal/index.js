import React, {useRef, useState} from 'react'
import {Modal, Button} from 'antd'
const MyModal = () => {
  const [visible, setVisible] = useState(false)
  return (<div>
    <Button type='primary' onClick={() => {setVisible(true)}}>打开</Button>
    <Modal
      title='my modal'
      visible={visible}
      onCancel={() => {setVisible(false)}}
    >
      123
    </Modal>
  </div>)
}

export default MyModal
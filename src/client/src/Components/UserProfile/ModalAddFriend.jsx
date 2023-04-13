import React, { useState } from 'react'
import { Modal, Text, Input, Button} from '@nextui-org/react'
import { UserIcon } from './UserIcon'
import { useDispatch } from 'react-redux'
import { sendRequestFriend } from '../../features/auth/authActions'

function ModalAddFriend({ visibleModal, setVisibleModal }) {
  
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const handlerCloseModal = () => setVisibleModal(false)
  
  const handleChangeUsername = ({target}) => setUsername(target.value)

  const handleFriendRequest = (e) => {
    e.preventDefault()
    
    dispatch(sendRequestFriend({ username }))
    setVisibleModal(false)
  }

  return (
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visibleModal}
        onClose={handlerCloseModal}
        blur
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Send a request to your 
            <Text b size={18}>
              {' New Friend'}
            </Text>
          </Text>
        </Modal.Header>
        <form onSubmit={handleFriendRequest}>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Username"
              pattern="^[a-zA-Z0-9_.-]*$"
              onChange={handleChangeUsername}
              contentLeft={<UserIcon />}
            />
          
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={handlerCloseModal}>
              Close
            </Button>
            <Button auto type='submit'>
              Send Request
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
  )
}

export default ModalAddFriend
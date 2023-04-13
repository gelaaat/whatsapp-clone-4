import { Container, Card, Spacer, Text, Input, Button} from '@nextui-org/react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authActions';

export default function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, successLogin, userInfo, userSessionId } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {

    if(successLogin || userSessionId) navigate('/userProfile')

  }, [successLogin, userInfo, userSessionId, navigate])

  const handleChangeUser = ({target}) =>{
      setUsername(target.value);
  }
  
  const handleChangePassword = ({target}) =>{
      setPassword(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    dispatch(loginUser({
      username,
      password
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container
        display="flex"
        justify="center"
        alignItems='center'
        css={{height: '100vh'}}
        >
        <Card css={{ mw: '420px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Login
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            aria-label='Username'
            pattern="^[a-zA-Z0-9_.-]*$"
            required
            onChange={handleChangeUser}
          />
          <Spacer y={1} />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            aria-label='Password'
            required
            onChange={handleChangePassword}
          />
          <Spacer y={1} />
          <Button type='submit'>Log in</Button>
        </Card>
      </Container>
    </form>
  );
}
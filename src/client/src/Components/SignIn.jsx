import { useState, useEffect } from "react"
import { Container, Card, Spacer, Text, Input, Button} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from "../features/auth/authActions"

export default function SignIn(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [email, setEmail] = useState('')

  const { loading, error, successRegister } = useSelector(
    state => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate();
  

  useEffect(() => {

    if(successRegister) navigate('/login')


  }, [navigate, successRegister])

  const handleSubmit = (e) => {
    e.preventDefault();
      
    if (secondPassword === password) {
          
      dispatch(registerUser({
        username,
        email,
        password
      }))

    }
  }

  const handleChangeUser = ({target}) =>{
      setUsername(target.value);
  }
  
  const handleChangePassword = ({target}) =>{
      setPassword(target.value);
  }

  const handleChangeEmail = ({ target }) =>{
      setEmail(target.value);
  }
  
  const handleChangeSecondPassword = ({target}) =>{
      setSecondPassword(target.value);
  }


  //Es te que prevenir el error i/o el loading també
  return(
      <form onSubmit={handleSubmit}>
        <Container
          display="flex"
          alignItems="center"
          justify="center"
          css={{ height: '100vh' }} >
          <Card css={{ mw: '420px', p: '20px' }}>
            <Text
              size={24}
              weight="bold"
              css={{
                mb: '20px',
              }}
            >
              Sign in
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
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              aria-label='Email'
              required
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$"
              onChange={handleChangeEmail}
              />
              <Spacer y={1} />
              <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Enter a Password"
              aria-label='Password'
              minLength="8"
              required
              onChange={handleChangePassword}
              />
              <Spacer y={1} />
              <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Repeat the Password"
              aria-label='Password'
              minLength="8"
              required
              onChange={handleChangeSecondPassword}
              />
              <Spacer y={1} />
              <Button type='submit'>Sign in</Button>
          </Card>
        </Container>
      </form>
  )
}
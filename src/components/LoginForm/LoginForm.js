import { useState } from 'react'
import { logIn } from '../../utilities/users-service'

export default function LoginForm({ user, setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    function handleChange(event) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault()
            const userToLogIn = await logIn(credentials)
            setUser(userToLogIn)
        } catch {
            setError('Error Logging In')
        }
    }

    return (
        <div className="container-sm border rounded-2 shadow-sm">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    className='form-control'
                    type='email'
                    name='email'
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input
                    className='form-control'
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button className ="btn btn-success mt-3"type='submit'>Log In</button>
            </form>
            <p className="error-message">{error}</p>
        </div>
    )
}
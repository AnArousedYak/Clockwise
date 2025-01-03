//import LoginStyled from ''

const Login = () => {
    return(
        <>
        <form>

            <label htmlFor="Username">Username:</label>
            <input type="text" id="Username" name="Username" required />

            <label htmlFor="Password">Password:</label>
            <input type="text" id="Password" name="Password" required />  

            <button type="submit">Login</button>

        </form>
        </>
    )
}

export default Login
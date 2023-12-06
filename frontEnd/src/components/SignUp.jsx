import '../styles/Sign.css'
const SignUp = ({ toggleComponent }) => {
    return (
        <div className="SignInContainer">
            <h2>Inscrivez-vous</h2>
            <h3>Vous pouvez créer un nouveau compte ici</h3>
            <div className='formContainerSignUp'>
                <form action="" className='formSignIn'>
                    
                    <input type='text' placeholder="Nom d'utilisateur"/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='password'/>
                    <input type="text" placeholder='Telephone'/>
                    <button className='submitSignIn'>Envoyer</button>
                    <div style={{ textAlign: 'center' ,marginTop:'10px' , cursor:'pointer'}} onClick={toggleComponent}>Avez-vous un compte ?</div>
                </form>
            </div>
        </div>

    )}
export default SignUp
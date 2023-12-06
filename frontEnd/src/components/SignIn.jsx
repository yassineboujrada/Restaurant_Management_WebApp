import '../styles/Sign.css'
const SignIn = ({ toggleComponent }) => {
    return (
        <div className="SignInContainer">
            
            <h2 >Se connecter</h2>
            <h3>Écrivez vos informations ici</h3>
            <div className='formContainerSignIn'>
                <form action="" className='formSignIn'>
                    <input type="text" placeholder="Nom d'utilisateur"/>
                    <input type="password" placeholder='Mot de passe'/>
                    <button className='submitSignIn'>Envoyer</button>
                </form>
                <div style={{ textAlign: 'center' ,marginTop:'10px' , cursor:'pointer'}} onClick={toggleComponent}>Vous n'avez pas de compte ? </div>
            </div>
            
        </div>

    )}
export default SignIn
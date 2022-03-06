import { useHistory } from 'react-router-dom';
import { useProfile } from './Context.Provider'

function Logout() {
    const History = useHistory();
    const {setProfile} = useProfile();
    setProfile('');
    History.push('/');

    return(
        <>
        
        </>
    )
}

export default Logout

import { useContext, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

import  AuthContext from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import Path from '../../paths';

export default function Logout () {
const navigate = useNavigate();
const { onLogout} = useContext(AuthContext);
     
     useEffect(()=> {
        authService.logout()
        .then (()=> {
           onLogout();
           navigate(Path.NotFound)
        })
        .catch(()=> navigate(Path.NotFound));
        
     }, [])
     return null;    
}
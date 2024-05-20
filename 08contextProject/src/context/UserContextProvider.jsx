import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

//children => jo bhi prop aaega usko ese ka esa rehne do & aage pass on krdo
//<UserContext.Provider></UserContext.Provider> => To make this accessible to all the components that is going to be rendered inside it.
// And akele ye likhne se baat nhi banegi kyuki kya access krega kya kuch data bhi to dena padega isliye value naam ka prop likha hai uske aage


//user isliye bnaya hai kyuki agar UserContext se koi data chahiye to vo User se mil jaega 
//setUser isliye bnaya hai kyuki agar UserContext m koi data add krna hai to vo setUser se add kiya jaega
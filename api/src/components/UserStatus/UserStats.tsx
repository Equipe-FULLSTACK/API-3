import React from "react";


export type UserStatus = {
    userId : number;
    isAdmin : boolean;
    userName : string;
    userNick : string;
    userPassword : string;
    userPhone : string;
    userEmail : string;
    userRole : number;
}

interface UserStatusProps {
    usersStatus : UserStatus[];
}

const Users: React.FC<UserStatusProps> = () => {

    
}
export default Users
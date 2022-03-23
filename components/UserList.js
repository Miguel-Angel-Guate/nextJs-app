const Users = ({users}) => {
    return ( <>
    {users.map((user) => {
        return (
            <li key={user.id}>

               {user.name} {user.username}
            </li>
        )
    })}
    </> );
}
 
export default Users;
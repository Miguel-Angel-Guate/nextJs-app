import Link from "next/link";
import User from "../components/UserList";

const UserList = ({users}) => {
    console.log('the users', users);
    return ( <>
    <Link href="/" passHref>
    <button>Home</button>
    </Link>
    <h2>user List fetching static generation</h2>
    <User users={users}/>
    </>  );
}
 
export default UserList;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log('data', data);
    return {
        props: {
            users: data
        }
    }
}

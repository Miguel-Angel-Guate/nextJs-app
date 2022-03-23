import Link from "next/link";


const NotFound = () => {
    return ( 
        <>
        <h1>Not found the product</h1>
        <Link href="/" passHref>
        <button>
            Home
        </button>
        </Link>
        </>
     );
}
 
export default NotFound;
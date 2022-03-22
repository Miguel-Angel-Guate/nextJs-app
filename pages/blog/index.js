import Link from "next/link";

Link
const blog = () => {
    return ( <>
        <h1>Blog home</h1>
        <Link href="/">
        <button>Home</button>
        </Link>
    </>
    );
};

export default blog;
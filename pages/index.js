import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
    const router = useRouter()
    const handleClick = () => {
        console.log('placing your order');
        router.push('/product')
    }
    return (
    <div>
        <h2>Home</h2>
        <Link href="/blog" passHref>
        <button>Blog</button>
        </Link>
        <Link href="/product" passHref>
        <button>Product</button>
        </Link>
        <button onClick={handleClick}>Place holder</button>
    </div>
        )
}
export default Home;
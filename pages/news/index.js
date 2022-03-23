import Link from "next/link";

const NewsList = ({articles}) => {
    console.log('articles', articles);
    return ( <>
    <Link href="/" passHref>
    <button>home</button>
    </Link>
    <h2>Articles</h2>
    {articles.map((article) => (
        <div key={article.id}>
            <li>
               {article.title}  {article.category}
               <p>{article.description}</p>
            </li>
        </div>
    ))}
    </>
     );
}
 
export default NewsList;

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()
    return {
        props: {
            articles: data
        }
    }
}
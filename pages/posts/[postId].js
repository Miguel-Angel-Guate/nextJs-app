import Link from "next/link";

const Post = ({post}) => {
    return ( 
        <div>
            <h2>post by id</h2>
            <Link href='/posts' passHref>
                <button>Back</button>
            </Link>
            <h2>{post.id}  {post.title}</h2>
            <div>
                <p>{post.body}</p>
            </div>
        </div>
     );
}
 
export default Post;
/*One way to resolve wrong wirh SSR. with this way pre-render all pages create when is build*/
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const path = data.map(post => {
        return{
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        //here is most easier to control id of link with this
        paths: path,
            fallback:false
    }
}

 /* whith this way not pre-render when is build*/
 /* export const getStaticPaths = async () => {
     return {
         paths: [],
         fallback: 'blocking'
     }
 } */
//context object content a key parameters 
export const getStaticProps = async (context) => {
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
    return {
        props: {
            post : data
        }
    }
}


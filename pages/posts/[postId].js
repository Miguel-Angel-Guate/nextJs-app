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
export const getStaticPaths = async () => {
    return {
       
        //     paths:[
        //         {
        //         params: {postId: '1'},
        //     }, 
        //     {
        //         params: {postId: '2'},
        //     }, 
        //     {
        //         params: {postId: '3'},
        //     }, 
        // ],
        //here is most easier to control id of link with this
        paths: [],
            fallback:'blocking'
    
    }
}
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


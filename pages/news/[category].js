const ListByCategory = ({byCateg, category}) => {
    // console.log('by cat', byCateg);
    return ( <>
    <h2>show news by category</h2>
    {byCateg.map((cat) => (
        <div key={cat.id}>
            <h2>{cat.id} {cat.title}</h2>
            <p>
                {cat.description}
            </p>
        </div>
    ))}
    </> );
}
 
export default ListByCategory;

export const getServerSideProps = async (context) => {
    const {params, query} = context
    const {category } = params

    // console.log('params',params)
    console.log('query', query)
    const res = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await res.json()

    return {
        props: {
            byCateg: data,
            category
        }
    }
}
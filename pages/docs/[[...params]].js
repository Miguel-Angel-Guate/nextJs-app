import { useRouter } from "next/router";
const Docs = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params);
    if(params.length === 2) {
        return (
            <h2>viewing docs for feature {params[0]} and concept {params[1]}</h2>
        )
    }else if(params.length === 1) {
        return <h2>viewing docs for feature {params[0]}</h2>
    }
    return ( 
    <>
    <h2>docs home page</h2>
    </> );
}
 
export default Docs;
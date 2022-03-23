import { useEffect, useState } from "react";

const Dashborad = () => {
    const [loading, setLoading] = useState(true)
    const [dashboard, setDashboard] = useState(null)
    console.log('dash', dashboard);
    const fetchDashBoard = async() => {
        const res = await fetch('http://localhost:4000/dashboard')
        const data = await res.json()
        setDashboard(data)
        setLoading(false)   
    }
useEffect(() => {
    fetchDashBoard()
}, [])

if(loading) {
    return <h3>loading.....</h3>
}

    return ( <>
     <h2>client side fetching</h2>
     <h1>Dashboard</h1>
     <h2>Posts - {dashboard.posts}</h2>
     <h2>likes - {dashboard.likes}</h2>
     <h2>followers - {dashboard.followers}</h2>
     <h2>following  - {dashboard.following}</h2>

    </> );
}
 
export default Dashborad;
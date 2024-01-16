import { useState, useEffect } from "react";

function Dashboard(){
    const [isloading, setIsLoading] = useState(true);
    const [dashboard, setDashboardData] = useState(null);
    useEffect(()=>{
        async function fetchDashboardData(){
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false)
        }
        fetchDashboardData();
    },[])

    if(isloading){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
        </div>
    )
}
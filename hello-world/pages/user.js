import User from "../component/user";

function UserList({userData}){
    return (
        <>
        <h1>List of users</h1>
        {userData.map((user)=>{
            return(
                <div key={user.id}>
                    {/* <p>Name: {user.name}</p>
                    <p>Email:{user.email}</p> */}
                    <User user={user} />
                </div>
            )

        })
        }
        
                </>
    )
}

export default UserList;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return {
        props:{
            userData: data,
        }
    }
}
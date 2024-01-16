function User({user}){
    return(
        <>
        <h1>User Information</h1>
        {/* Username */}
        <p>{user.name}</p>
        <p>
            {user.email}
        </p>
        </>
    )
}

export default User;

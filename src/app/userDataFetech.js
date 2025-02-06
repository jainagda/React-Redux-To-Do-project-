import React, { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../features/userSlice";
// import { UserProfile } from "./app/userDataFetech";

 const UserProfiles = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user ); 
  
    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);
  
    console.log("use r new data " ,user)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        {
            user.map((user,index)=>{
                <>
                <h2>{user?.name}</h2>
                <p>Email: {user?.email}</p>
                </>

            })
        }
        
      </div>
    );
  };
  export default UserProfiles;
  
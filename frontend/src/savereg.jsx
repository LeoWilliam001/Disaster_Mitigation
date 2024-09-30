import {create} from "zustand"

export const useReg=create((set)=>({
    users:[],
    setUsers:(users)=>set({users}),
    createUser: async(newUser)=>{
        if(!newUser.username || !newUser.email || !newUser.password)
        {
            return {success:false,message:"Enter all the required fields"}
        }
        const res=await fetch("http://localhost:5000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        const data=await res.json();
        set((state)=>({users:[...state.users,data.data]}))
        return {success:true,message:"Registration successful"}
    }
}))
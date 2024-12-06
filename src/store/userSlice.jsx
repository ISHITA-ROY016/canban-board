export const createUserSlice = ((set)=>(
    {
        address:'',
        age:0,
        fullName:'',
        userName:'',
        setAddress:(address)=>set(()=>({address}))
    }
))

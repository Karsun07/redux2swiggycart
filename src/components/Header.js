import { useSelector } from "react-redux"

export default function Header(){
    const count=useSelector((state)=>state.slice1.count);
    
    return (
        <>
        
        <h2>Cart:({count})</h2>

        </>
    )
}
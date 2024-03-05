import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#242424'
    }}>
        {/** NAV BAR... needs work  */}
        <div style={{
            height: '3vh',
            width: '100%',
            border: '1px beige solid',
            paddingTop: 13,
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <Link to="/" style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>back to map container</Link>
            <p style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>information</p>
            <p style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>information</p>
            <p style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>information</p>
            <p style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>information</p>
        </div>


        {/** dashboard cluster */}
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            width: '90%',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            margin: 5
            }}>
        <div style={{ 
             marginBottom: 15,
            height: 480, 
            width: '40vh', 
            border: '2px beige solid', 
            borderRadius: 5, color: 'beige', 
            fontFamily: 'monospace', 
            fontSize: 15, }}>
            history of locations
        </div>
        <div style={{ 
            height: 480,  
            width: '40vh', 
            border: '2px beige solid', 
            borderRadius: 5, 
            color: 'beige', 
            fontFamily: 'monospace', 
            fontSize: 15, }}>
            ride distances
        </div>
        <div style={{ 
             height: 480, 
             width: '40vh', 
            border: '2px beige solid', 
            borderRadius: 5, 
            color: 'beige', 
            fontFamily: 'monospace', 
            fontSize: 15, }}>
            payouts per ride 
        </div>
        <div style={{ 
            height: 480, 
            width: '40vh', 
            border: '2px beige solid', 
            borderRadius: 5, 
            color: 'beige', 
            fontFamily: 'monospace', 
            fontSize: 15, }}>
           current events 
        </div>
        <div style={{  
           
            height: 480, 
            width: '40vh', 
            border: '2px beige solid', 
            borderRadius: 5, 
            color: 'beige', 
            fontFamily: 'monospace', 
            fontSize: 15,}}>
            pick-up notes 
        </div>
        <div style={{  
            height: 480, 
            width: '40vh', 
            border: '2px beige solid', 
            borderRadius: 5, 
            color: 'beige', 
            fontFamily: 'monospace', 
            fontSize: 15,}}>
            ratings and reviews
        </div>

        </div>

       
    </div>
  )
}

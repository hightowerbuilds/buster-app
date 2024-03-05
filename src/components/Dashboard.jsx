import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#242424'
    }}>
        {/** NAV BAR... needs work  */}
        <div>
            <Link to="/" style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>back to map container</Link>
            
        </div>


        {/** dashboard cluster */}
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        <div style={{ height: 500, width: 500, border: '2px beige solid', borderRadius: 5, color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>
            history of locations
        </div>
        <div style={{ height: 500, width: 500, border: '2px beige solid', borderRadius: 5, color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>
            ride distances
        </div>
        <div style={{ height: 500, width: 500, border: '2px beige solid', borderRadius: 5, color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>
            payouts per ride 
        </div>
        <div style={{ height: 500, width: 500, border: '2px beige solid', borderRadius: 5, color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>
           current events 
        </div>
        <div style={{ height: 500, width: 500, border: '2px beige solid', borderRadius: 5, color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>
            pick-up notes 
        </div>
        <div style={{ height: 500, width: 500, border: '2px beige solid', borderRadius: 5, color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>
            ratings and reviews
        </div>

        </div>

       
    </div>
  )
}

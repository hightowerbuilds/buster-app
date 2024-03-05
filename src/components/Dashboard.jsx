import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#242424'
    }}>
        <div>
            <Link to="/" style={{ color: 'beige', fontFamily: 'monospace', fontSize: 15, }}>back to map container</Link>
                
        </div>
        
       
    </div>
  )
}

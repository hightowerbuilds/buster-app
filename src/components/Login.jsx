import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#242424',
        fontFamily: 'monospace',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        fontSize: 14,
        
    }}>
        <div>
            <p style={{ margin: 10, color: 'beige'}}>login</p>
            
            <input type="text" placeholder="user_name" />
            <br />
            <input type="text" placeholder="password"/>
            <br />
            <br />
            <Link style={{ margin: 10,  color: 'beige'}} to="/" >map page</Link>
            <br />
            <Link style={{ margin: 10,  color: 'beige'}} to="/dashboard">dashboard</Link>
        </div>
        
    </div>
  )
}

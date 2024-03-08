

export default function MapWidget() {
  return (
    <div style={{
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 1,
        height: 100,
        width: 100, 
        backdropFilter: 'blur(5px)',
        border: '2px black solid',
        fontFamily: 'monospace',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        
        MapWidget
        {console.log('im here')}
    
    </div>
  )
}

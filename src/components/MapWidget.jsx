

export default function MapWidget(props) {



  return (
    <div style={{
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 1,
        height: 100,
        width: 'fit-content', 
        backdropFilter: 'blur(5px)',
        border: '2px black solid',
        fontFamily: 'monospace',
        display: 'flex',
        padding: 5,
       
    }}>
        <p>
        <p>map widget</p>
        <br />
        <p>{props.lat}</p>
        <br />
        <p>{props.lng}</p>
        </p>
       
    </div>
  )
}

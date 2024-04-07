

export default function MapWidget(props) {

    const BOX = {
      LAT: props.latitude,
      LNG: props.longitude,
      CENTER: props.center,

    }


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
        <p>MapWidget</p>
        <br />
        <p>{BOX.LAT ? BOX.LAT : 'loading...'} </p>
        <br />
        <p>{BOX.LNG ? BOX.LNG : 'loading...'}</p>
        </p>
        <br />
       
       
       
    </div>
  )
}

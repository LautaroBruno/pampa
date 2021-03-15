import { Container } from '@material-ui/core'
import React from 'react'
import map from '../resources/img/Ubicacion/mapa.png'
import ubic from '../resources/img/Ubicacion/pin.png'
import CardCountry from './CardCountry'

const MapSection = ({text}) => {
    const [showedCard, setShowedCard] = React.useState(<CardCountry content={text[0]}  />)
    const hoverHandler = (country)=>{
        setShowedCard(<CardCountry content={country}/>)
    }
    return (
        <Container style={{marginTop:"40px",marginBottom:"40px",position:"relative"}}>
            <img className="img-map" style={{width:"100%"}} src={map}/>
            {text.map(data=>{
               return(<img className={"img-map-location "+data.country} onMouseOver={e=>hoverHandler(data)}  src={ubic}/>)
            })}
            {showedCard}
        </Container>
    )
}

export default MapSection

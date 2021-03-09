import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import comillas from '../resources/img/Interior/comillas.png'
const Section7 = ({text}) => {
    const responsive={
        0: {
            items: 1,
        },
        1000: {
            items: 2,

        }
    }
    return (
        <Container style={{paddingBottom:"20px"}} >
            <div style={{textAlign:"left",display:"flex",flexDirection:"column"}}>
                <h2 className="tittle-s3">
                    {text.title}
                </h2>
                <OwlCarousel items={2} responsive={responsive} navClass="nav-owl-" dots={true} className='owl-theme' loop margin={10} nav>
                    {text.citas.map(cita=>{
                        return(
                            <Grid className="cita-container">
                                <div style={{display:"flex",margin:"10% 15px 40px 10%"}}>
                                    <img style={{width:"140px",objectFit:"contain", margin:"5% 15px 40px 5%"}} src={cita.photo} />
                                    <div className="cita-text">
                                        <p className="lblue">{cita.name}</p>
                                        <p className="white">{cita.declaration}</p>
                                        <img style={{width:"60px", marginLeft:"auto"}} src={comillas}/>
                                    </div>
                                </div>
                               
                            </Grid>
                        )
                    })}
                </OwlCarousel>
            </div>
        </Container>
    )
}

export default Section7

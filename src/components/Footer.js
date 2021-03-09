import { Container, Grid } from '@material-ui/core'
import React from 'react'
import logo from '../resources/img/footer/Logo.png'
import facebook from '../resources/img/footer/facebook.png'
import instagram from '../resources/img/footer/instagram.png'
import linkedin from '../resources/img/footer/Linkedin.png'
import twitter from '../resources/img/footer/twitter.png'

const Footer = ({ text }) => {
    return (
        <div className="footer white">
            <Container style={{ padding: "10px 0", display: "flex", flexDirection: "column" }}>
                <Grid
                    style={{ overflow: "hidden", paddingBottom: "20px" }}
                    className="newsletter-cont"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid sm={12} md={6}>
                        <img src={logo} alt={logo} />
                    </Grid>
                    <Grid sm={12} md={6}>
                        <div style={{ padding: "7px 24px", width: "max-content", height: "max-content", margin: "auto 0 auto auto" }} className="meet-btn bg-violet white ">{text.button}</div>
                    </Grid>
                </Grid>
                <div className="separator"></div>
                <Grid
                    style={{ overflow: "hidden", paddingBottom: "20px", padding:"15px"}}
                    className="newsletter-cont"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid sm={12} md={6}>
                        <a style={{color:"white"}} href={`mailto:${text.email}`} className="big">{text.email}</a>
                    </Grid>
                    <Grid style={{display:"flex"}} sm={12} md={6}>
                    <div className="social-media" style={{marginLeft:"auto"}}>
                        <a href={text.facebook}><img src={facebook} alt="facebook"></img></a>
                        <a href={text.instagram}><img src={instagram} alt="instagram"></img></a>
                        <a href={text.linkedin}><img src={linkedin} alt="linkedin"></img></a>
                        <a href={text.twitter}><img src={twitter} alt="twitter"></img></a>
                    </div>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default Footer

import { Button, Container, Grid } from '@material-ui/core'
import letter from '../resources/img/Interior/sobre-newsletter.png'
import React from 'react'

const Section9 = ({ text }) => {
    return (
        <Container>
            <h2 className="tittle-s3 lblue">
                {text.title}
            </h2>
            <img style={{width:"50px"}} src={letter} />
            <Grid
                style={{ overflow: "hidden", paddingBottom: "20px" }}
                className="newsletter-cont"
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid md={4} sm={12}>
                    <input type="text" placeholder={text.placeholder} />
                </Grid>
                <Grid md={4} sm={12}>
                    <input type="text" placeholder={text.placeholder2} />
                </Grid>
                <Grid md={4} sm={12}>
                    <button style={{margin:"5% 5px"}}>{text.button}</button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Section9

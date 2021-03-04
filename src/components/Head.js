import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import bgImg from '../resources/img/Header/fondo.jpg'
import CustomForm from './CustomForm'

const Head = ({text}) => {
    const containerStyle = {
        backgroundImage:`url(${bgImg})`,
        backgroundPosition:"center",
        height:"600px",
        paddingTop:"150px"
    }
    return (
        <div style={containerStyle}>
            <Container>
                <Grid className
                container
                direction="row"
                >
                    <Grid sm={12} md={7}> 
                        <Box  textAlign="left">
                            <h1 className="lblue titlehead bolder">{text.title}</h1>
                            <h2 className="white subtitlehead">{text.subtitle}</h2>
                            <div style={{padding:"7px 24px", width:"max-content"}} className="meet-btn bg-violet white ">{text.button}</div>
                        </Box>
                    </Grid>
                    <Grid sm={12} md={5}>
                        <CustomForm text={text.form} violet={true}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Head

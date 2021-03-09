import { Container, Grid } from '@material-ui/core'
import React from 'react'
import imgEmpresa from '../resources/img/Interior/imagen-empresa.png'

const section5 = ({ text }) => {
    return (
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column", margin: "0 5%" }}>
            <Container>
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
            </Container>
            <Grid
                style={{overflow:"hidden", paddingBottom: "20px" }}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid style={{overflow:"hidden"}} sm={12} md={6}>
                    <img style={{objectFit:"contain", maxHeight:"600px"}} src={imgEmpresa}/>
                </Grid>

                <Grid  sm={12} md={6}>
                    <div style={{padding:"2em"}}>
                    <p className="big">{text.content}</p>
                    <div style={{padding:"7px 24px", width:"max-content"}} className="meet-btn bg-violet white ">{text.button}</div>
                    </div>
                </Grid>
            </Grid>



        </div>
    )
}

export default section5

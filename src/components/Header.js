import { Container, Grid, Box } from '@material-ui/core'
import React from 'react'
import logo from '../resources/img/Header/logo.png'
import { makeStyles } from '@material-ui/core/styles';

const Header = ({ text,lan }) => {
    console.log(text)
    lan('asd')
    return (
        <div style={{ position: "absolute", width: "100%" }}>
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <img alt="logo" src={logo} />
                    </Grid>
                    <Grid item xs={9}>
                        <Grid className="menu-container white"
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            >
                            <Grid ><a href="/#services">{text.serv}</a></Grid>
                            <Grid ><a href="/#contact">{text.cont}</a></Grid>
                            <Grid className="meet-btn bg-violet "><a href="/#services ">{text.meet}</a></Grid>
                            <Grid className="d-flex "><img src={text.flag} style={{width:"35px"}} alt="flag" /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header

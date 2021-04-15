import { Container, Grid, Box } from '@material-ui/core'
import React from 'react'
import logo from '../resources/img/Header/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import HamburgerMenu from 'react-hamburger-menu';

const Header = ({ text, lan }) => {
    const [width, setwidth] = React.useState(window.innerWidth)
    const [openMenu, setOpenMenu] = React.useState(false)
    return (
        <div style={{ position: "absolute", width: "100%" }} >
            <Container >
                <Grid container className="header_line" >
                    <Grid item xs={3} >
                        <img alt="logo"
                            src={logo} />
                    </Grid> {
                        width > 959 ? <Grid item xs={9} >
                            <Grid className="menu-container white"
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center" >
                                <Grid> <a href="/#services" > {text.serv} </a></Grid>
                                <Grid > <a href="/#contact" > {text.cont} </a></Grid >
                                <Grid className="meet-btn bg-violet " > < a href="/#services " > {text.meet} </a></Grid>
                                <Grid className="d-flex " > <img src={text.flag}
                                    onClick={lan}
                                    style={{ width: "35px" }}
                                    alt="flag" /> </Grid> </Grid> </Grid> : <Grid item xs={9} >
                            <Grid className="menu-container white"
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center" >

                                <HamburgerMenu
                                    isOpen={openMenu}
                                    menuClicked={
                                        () => setOpenMenu(!openMenu)}
                                    width={22}
                                    height={17}
                                    strokeWidth={2}
                                    rotate={0}
                                    color='white'
                                    borderRadius={0}
                                    animationDuration={0.5}
                                />

                                <Grid style={
                                    { marginLeft: "10px" }}
                                    className="d-flex " > < img src={text.flag}
                                        onClick={lan}
                                        style={
                                            { width: "35px" }}
                                        alt="flag" /> </Grid> <div className={openMenu ? "menu-mobile open-menu" : "menu-mobile close-menu"} >
                                    <Grid className="menu-container white"
                                        container
                                        direction="column"
                                        justify="flex-end"
                                        alignItems="center" >
                                        <Grid > < a href="/#services" > {text.serv} </a></Grid >
                                        <Grid > < a href="/#contact" > {text.cont} </a></Grid >
                                        <Grid className="meet-btn bg-violet " > < a href="/#services " > {text.meet} </a></Grid >
                                    </Grid> </div> </Grid> </Grid>
                    }

                </Grid> </Container> </div >
    )
}

export default Header
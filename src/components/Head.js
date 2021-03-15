import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import bgImg from '../resources/img/Header/fondo.jpg'
import CustomForm from './CustomForm'
import { makeStyles } from '@material-ui/core/styles';

const Head = ({text}) => {
    const containerStyle = {
        backgroundImage:`url(${bgImg})`,
        backgroundPosition:"center",
        paddingTop:"150px",
        paddingBottom:"50px"
    }
    const useStyles = makeStyles({
        boxTitle: {
          padding:"0 20px 0 0"
        },
      });
      const classes = useStyles();
    return (
        
        <div style={containerStyle}>
            <Container>
                <Grid className
                container
                direction="row"
                >
                    <Grid sm={12} md={7}> 
                        <Box className={classes.boxTitle} style={{}} textAlign="left">
                            <h1 className="lblue titlehead bolder">{text.title}</h1>
                            <h2 className="white subtitlehead">{text.subtitle}</h2>
                            <div style={{padding:"7px 24px", width:"fit-content"}} className="meet-btn bg-violet white ">{text.button}</div>
                        </Box>
                    </Grid>
                    <Grid sm={12} md={5}>
                        <CustomForm text={text.form} violet={true} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Head

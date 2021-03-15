import { Container, Grid } from '@material-ui/core'
import React from 'react'
import CustomForm from './CustomForm'

const Section8 = ({ text }) => {
    const [width, setwidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        window.onresize = setwidth(window.innerWidth);
    },[width])
    return (
        <div className="second-form">
            <Container>
                <Grid
                    style={{ overflow: "hidden", paddingBottom: "20px" }}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid style={{paddingTop:"0px"}} md={6} sm={12}>
                        <h2 className="tittle-s3 lblue">
                            {text.title}
                        </h2>
                        <p className={width > 959 ? "white" : "black"}>
                            {text.content}
                        </p>
                        <div style={{padding:"5px 24px", width:"max-content"}} className="meet-btn2 bg-violet white ">{text.btn1}</div>
                        <Grid
                            style={{overflow:"hidden", paddingBottom: "20px", }}
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid md={6} sm={12}>
                                <button className="btn-second-form">
                                    {text.btn2}
                                </button>
                            </Grid>
                            <Grid sm={12} md={6}>
                                <button className="btn-second-form">
                                    {text.btn3}
                                </button>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid md={6} style={{marginTop:"-50px"}} sm={12}>
                        <CustomForm text={text.form} />
                    </Grid> 
                    

                </Grid>

            </Container>

        </div>
    )
}

export default Section8

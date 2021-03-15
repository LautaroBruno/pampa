import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import Steps from './Steps'
const Section2 = ({ text }) => {
    return (
        <div>
            <Container style={{textAlign:"left",display:"flex",flexDirection:"column"}}>
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
                
                <Grid   
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                        {text.steps.map(content=><Steps content={content}/>)}
                </Grid>
            </Container>
        </div>
    )
}

export default Section2

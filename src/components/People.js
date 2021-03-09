import React from 'react'
import { Grid } from '@material-ui/core'

const People = ({content}) => {
    console.log(content)
    return (
        <Grid className="" style={{textAlign:"center",marginBottom:"30px"}} container direction="column" justify="center" alignItems="center" md={4} sm={12}>
            <img src={content.img} />

            <h2 style={{fontSize:"30px",margin:"0px",fontWeight:"900"}}>{content.title.toUpperCase()}</h2>
            <div style={{padding:"0 10%"}}>{content.content}</div>
            <div className="lblue" style={{padding:"0 10%"}}><a href="/">{content.content2}</a></div>
        </Grid>
    )
}

export default People

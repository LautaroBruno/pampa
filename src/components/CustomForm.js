import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import React from 'react'

 const CustomForm = ({text,violet}) => {
    return (
        <div style={{marginTop:"70px", textAlign:"left",padding:"5px 15px"}} className={violet ? "bg-violet forms-land " :  "bg-black forms-land"}>
            <h2 style={{margin:"0",fontSize:"33px"}} className="white">{text.title}</h2>
            <form className="">
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            </form>
            
        </div>
    )
}
export default CustomForm
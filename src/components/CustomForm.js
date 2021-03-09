import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


 const CustomForm = ({text,violet}) => {
    
    const divStyle = {
        margin: "12px 0px"
    }
    const submitForm= e=>{
        e.preventDefault();
        console.log(e.target)
    }
    return (
        <div style={{padding:"30px"}}>
            <div style={{marginTop:"70px", textAlign:"left",padding:"15px 70px"}} className={violet ? "bg-violet forms-land " :  "bg-black forms-land"}>
                <h2 style={{margin:"0",fontSize:"33px"}} className={violet ? "white" :"lblue"}>{text.title}</h2>
                <form className={violet ?"form-home fh-violet" : "form-home fh-black"} onSubmit={(e)=>submitForm(e)}>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2}>{text.label1}</label>
                        <input className="input-f" id={text.label1.replace(" ","")} aria-describedby="my-helper-text" />
                    </div>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2}>{text.label2}</label>
                        <input className="input-f" id={text.label2.replace(" ","")} aria-describedby="my-helper-text" />
                    </div >
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2}>{text.label3}</label>
                        <input className="input-f" id={text.label3.replace(" ","")} aria-describedby="my-helper-text" />
                    </div>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2}>{text.label4}</label>
                        <input className="input-f" id={text.label4.replace(" ","")} aria-describedby="my-helper-text" />
                    </div>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2}>{text.label5}</label>
                        <input className="input-f" id={text.label5.replace(" ","")} aria-describedby="my-helper-text" />
                    </div>
                    <Button type="submit" style={{color:"white",fontSize:"20px",backgroundColor:"#34B2E7",margin:"auto",minWidth:"180px"}}>{text.button}</Button>
                </form>
                
            </div>
        </div>
    )
}
export default CustomForm
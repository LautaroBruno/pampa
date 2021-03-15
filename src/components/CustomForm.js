import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


 const CustomForm = ({text,violet}) => {
    const [width, setwidth] = React.useState(window.innerWidth)
    
    const divStyle = {
        margin: "12px 0px"
    }
    const submitForm= e=>{
        e.preventDefault();
    }
    return (
        <div style={{padding:"15px"}}>
            <div style={{marginTop:"70px", textAlign:"left",padding:width > 400 ? "15px 70px" : "15px 15px"}} className={violet ? "bg-violet forms-land " :  "bg-black forms-land"}>
                <h2 style={{margin:"0",fontSize:"33px"}} className={violet ? "white" :"lblue"}>{text.title}</h2>
                <form className={violet ?"form-home fh-violet" : "form-home fh-black"} onSubmit={(e)=>submitForm(e)}>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2}>{text.label1}</label>
                        <input className="input-f" id={violet ? text.label1.replace(" ","") : text.label1.replace(" ","")+2} aria-describedby="my-helper-text" />
                    </div>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label2.replace(" ","") : text.label2.replace(" ","")+2}>{text.label2}</label>
                        <input className="input-f" id={violet ? text.label2.replace(" ","") : text.label2.replace(" ","")+2} aria-describedby="my-helper-text" />
                    </div >
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label3.replace(" ","") : text.label3.replace(" ","")+2}>{text.label3}</label>
                        <input className="input-f" id={violet ? text.label3.replace(" ","") : text.label3.replace(" ","")+2} aria-describedby="my-helper-text" />
                    </div>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label4.replace(" ","") : text.label4.replace(" ","")+2}>{text.label4}</label>
                        <input className="input-f" id={violet ? text.label4.replace(" ","") : text.label4.replace(" ","")+2} aria-describedby="my-helper-text" />
                    </div>
                    <div style={divStyle}>
                        <label  className="input-label" htmlFor={violet ? text.label5.replace(" ","") : text.label5.replace(" ","")+2}>{text.label5}</label>
                        <input className="input-f" id={violet ? text.label5.replace(" ","") : text.label5.replace(" ","")+2} aria-describedby="my-helper-text" />
                    </div>
                    <Button type="submit" style={{color:"white",fontSize:"20px",backgroundColor:"#34B2E7",margin:"auto",minWidth:"180px"}}>{text.button}</Button>
                </form>
                
            </div>
        </div>
    )
}
export default CustomForm
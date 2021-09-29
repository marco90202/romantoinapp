import React, { Fragment, useState} from 'react'
import { ValidateRoman, ConvertRoman } from '../Utils/Helpers'
import { Stack, TextField } from '@mui/material'

const ConvertForm = () => {

    const [romanString, setRomanString] = useState('')
    const [integer , setInteger] = useState('')
    const [error, setError] = useState({
        valid: false,
        text: ""
    })

    const RomanString = e => {
        let string = e.target.value.toUpperCase()
        let valid = ValidateRoman(string)
        if(valid === true){
            setRomanString(string)
            setInteger(ConvertRoman(string,valid))
            setError({...error,
                        valid: false,
                        text: "" })
        }else{
            setRomanString('')
            setInteger('')
            setError({...error,
                        valid: true,
                        text: "Only Romans" })
        }
    }

    return(
        <Fragment>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <main>
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}> 
                    <TextField 
                        label="Roman Number" 
                        variant="outlined" 
                        onChange={RomanString}
                        value={romanString} 
                        error={error.valid} 
                        helperText={error.text}/>
                    <TextField label="Result" variant="outlined" value={integer} />
            </Stack>
                    
            </main>
        </Fragment>
    )
}
export default ConvertForm
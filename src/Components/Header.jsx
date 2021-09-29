import React from 'react'
import { AppBar, Typography, Toolbar } from '@mui/material'

const Header = () => {

    return (
            <AppBar > 
                <Toolbar>
                    <Typography variant="h3" component="h2" >
                        Roman to Integer Number  
                    </Typography> 
                </Toolbar>
            </AppBar>
    )
}
export default Header
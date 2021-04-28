import React from 'react';
import LOGO from "../img/ine-logo.png";
import {Grid, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";



const Header = () => {
    return ( 
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={0}
            >
                <Link to="/" alt="INE">
                    <img src={LOGO} alt="INE"></img>
                </Link>

                <Typography   variant="h1" defaultValue={null}>
                Votaciones
                </Typography>

                

            </Grid>
     );
}
 
export default Header;
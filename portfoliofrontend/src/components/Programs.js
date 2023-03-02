import * as React from 'react';
import SLogo from '../images/skills/springboot.png'
import Flask from '../images/skills/flask.png'
import Boostrap from '../images/skills/Bootstrap_logo.svg.png'

import {Grid} from "@mui/material";

export default function StandardImageList() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <img style={{width:"256px"}}
                     src={SLogo}
                     alt={SLogo}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Flask}
                     alt={Flask}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Boostrap}
                     alt={Boostrap}
                />
            </Grid>
        </Grid>
    );
}


import * as React from 'react';
import {Grid} from "@mui/material";
import Git from '../images/skills/Git.png'
import Figma from '../images/skills/figma.png'
import IJ from '../images/skills/IJ.png'
import VSC from '../images/skills/vsc.png'

export default function StandardImageList() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Git}
                     alt={Git}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Figma}
                     alt={Figma}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={IJ}
                     alt={IJ}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={VSC}
                     alt={VSC}
                />
            </Grid>
        </Grid>
    );
}


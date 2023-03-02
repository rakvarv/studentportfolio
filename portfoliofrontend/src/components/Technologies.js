import * as React from 'react';
import HTML5 from '../images/skills/HTML5.svg.png'
import CSSLogo from '../images/skills/CSS.png'
import Python from '../images/skills/python.png'
import JS from '../images/skills/JS.png'
import MySQL from '../images/skills/mysql.png'
import PHP from '../images/skills/PHP.png'
import Java from '../images/skills/java.png'
import {Grid} from "@mui/material";

export default function StandardImageList() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <img style={{width:"256px"}}
                    src={HTML5}
                    alt={HTML5}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                    src={CSSLogo}
                    alt={CSSLogo}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Python}
                     alt={Python}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={JS}
                     alt={JS}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={MySQL}
                     alt={MySQL}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={PHP}
                     alt={PHP}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Java}
                     alt={Java}
                />
            </Grid>
        </Grid>
    );
}


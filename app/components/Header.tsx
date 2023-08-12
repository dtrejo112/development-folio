// @ts-nocheck
"use client";

import * as React from 'react';
import { Grid, Button, Switch, FormControlLabel} from '@mui/material';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['100', '300', '400','500', '700', '900'],
    subsets: ['latin'],
  });

  
export default function Header({ switchTheme }: { switchTheme: any}) {
    const pathname = usePathname();
    return (
        <Grid sx={{ p: 3}}> 
            <Grid 
                container
                direction='row'
                justifyContent='space-between'
                alignItems='flex-start'>
                <Grid item lg={6}>
                   <Logo /> 
                </Grid>   
                <Grid 
                   item
                   xs={6}
                   >
                    <Grid 
                       container
                       sx={{mt: 2}}
                       direction='row'
                       alignItems='center'
                       justifyContent={{xs: 'flex-start', md:'flex-end'}}
                      > 
                        <FormControlLabel 
                            control={
                            <Switch defaultChecked onChange={switchTheme} name='danny' color='primary' />
                            }
                            label='Dark Mode'
                            />
                    </Grid>
                
                </Grid>     
            </Grid>        
        </Grid>
    )
}
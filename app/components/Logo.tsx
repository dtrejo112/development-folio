import Image from 'next/image'
import logo from '../../public/headache.png'
import { Stack, Typography } from '@mui/material'

export default function Logo() {
    return (
        <>
       <Stack 
              alignItems="flex-start"
              direction='column'
              spacing={1}>
        
        <Typography variant="h2" component='h1' className='title'> Danny Trejo
        </Typography>
        <Typography variant="h6" component='h2'>
            Designer & Developer
        </Typography>
       </Stack>
        </>
    )
}
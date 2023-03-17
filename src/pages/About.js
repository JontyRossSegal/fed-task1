import { Paper, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import AboutUs from './resources/AboutUs';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#65a7dd',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function About(){
    return(
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}>
            <Grid xs={12} md={11} >
                <Item>
                    <Typography variant='h1'>About Us:</Typography>
                    <Typography variant='h6'sx={{textAlign: "left"}}><AboutUs/></Typography>
                </Item>
            </Grid>
        </Grid>
        </Box>
    );
}
export default About;
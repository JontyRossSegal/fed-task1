import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'

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
                <Item>About Us</Item>
            </Grid>
        </Grid>
        </Box>
    );
}
export default About;
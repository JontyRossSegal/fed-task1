import { Paper, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#65a7dd',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home() {
    return (
        <Box sx={{flexGrow: 1, margin: "0 auto" }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}  >
            <Grid xs={12} md={11}  >
                <Item >
                    <Typography variant='h1'>Welcome to Lexsynergy!</Typography>
                    <Typography variant='h3'>The home of all things domains!</Typography>
                </Item>
            </Grid>
        </Grid>
        </Box>
    );
}
export default Home;
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import CustomItem from '../components/CustomItem';

function Home() {
    return (
        <Box sx={{ flexGrow: 1, margin: "0 auto" }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}  >
                <Grid xs={12} md={11}  >
                    <CustomItem >
                        <Typography variant='h1'>Welcome to Lexsynergy!</Typography>
                        <Typography variant='h3'>The home of all things domains!</Typography>
                    </CustomItem>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Home;
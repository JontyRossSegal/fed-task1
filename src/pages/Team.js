import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import CardLayout from '../layouts/cardLayout';

function Team() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}>
                <Grid xs={12} md={11} >
                    <CardLayout dataType={"teamData"} />
                </Grid>
            </Grid>
        </Box>
    );
}
export default Team;
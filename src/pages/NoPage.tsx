import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import CustomItem from '../components/CustomItem';

function NoPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}>
                <Grid xs={12} md={11} >
                    <CustomItem>
                        <h1>Oh no!</h1>
                        <p>An unexpected error has occurred.</p>
                        <p>Please navigate to a valid URL</p>
                    </CustomItem>
                </Grid>
            </Grid>
        </Box>
    );
}
export default NoPage;
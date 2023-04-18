import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import CustomItem from './CustomItem';


export default function appFoot() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} justifyContent={'space-around'} >
                <Grid xs={11.99} >
                    <CustomItem square={true} >
                        <Typography variant='h4'>Footer</Typography>
                    </CustomItem>
                </Grid>
            </Grid>
        </Box>
    );
}
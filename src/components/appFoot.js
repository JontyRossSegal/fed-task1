import { Paper, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1976d2',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function appFoot(){
    return(
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={0} justifyContent={'space-around'} >
            <Grid xs={12} >
                <Item square="true">
                    <Typography variant='h4'>Footer</Typography>
                </Item>
            </Grid>
        </Grid>
        </Box>
    );
}
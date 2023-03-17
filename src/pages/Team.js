import { Paper, Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'
import teams from './data/team.json';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#65a7dd',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Team() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}>
                <Grid xs={12} md={11} >
                    <Item sx={{display: "flex", flexDirection:"row", flexWrap:"wrap", rowGap: 1, columnGap: 2, justifyContent: 'space-evenly'}}>
                        {
                            teams.map((a) => (
                                //  Create a components that can be used for both blog and team. Regardless of whether an image is present or not.
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {a.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {a.about}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))
                        }
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Team;
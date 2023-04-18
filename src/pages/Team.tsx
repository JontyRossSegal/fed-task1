import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import CustomItem from '../components/CustomItem';
import CustomCard from '../components/CustomCard';
import data from '../data/team.json'

function Team() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"}>
                <Grid xs={12} md={11} >
                <CustomItem sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 1, columnGap: 2, justifyContent: 'space-evenly' }}>
                    {data.map((o,i) => (
                        <CustomCard key={i} header={o.name} blurb={o.about}/>
                    ))}
                    </CustomItem>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Team;
import { Paper, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import blogs from '../pages/data/blogs.json'
import teams from '../pages/data/team.json';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#65a7dd',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CardLayout(props) {
    const dataType = props.dataType;
    console.log(dataType);
    if (dataType === 'blogData') {
        console.log("wow");
        return (
            <Item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 1, columnGap: 2, justifyContent: 'space-evenly' }}>
                {
                    blogs.map((a) => (
                        <li key={a._id} >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={a.picture}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {a.company}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {a.about}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </li>
                    ))
                }
            </Item>
        );
    }
    else if (dataType === "teamData") {
        return (
            <Item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 1, columnGap: 2, justifyContent: 'space-evenly' }}>
                {
                    teams.map((a) => (
                        <li key={a._id}>
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
                            </Card></li>
                    ))
                }
            </Item>
        );
    }
    else {
        return (
            <h1>Invalid dataType</h1>
        );
    }
}
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';

export default function CustomCard({ image, header, blurb}) {
    return (
        <Card sx={{ maxWidth: 500 }} >
            <CardActionArea >
                {image && <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {blurb}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
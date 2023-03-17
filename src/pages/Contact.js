import { Paper, Box, Typography, Card, CardContent, TextField, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'

const businessArea = [
    {
      value: 'Brand Protection',
      label: 'Brand Protection',
    },
    {
      value: 'Domain Management',
      label: 'Domain Management',
    },
    {
      value: 'Brand Protection and Domain Management',
      label: 'Brand Protection and Domain Management',
    }
  ];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#65a7dd',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Contact() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent={'space-around'} padding={"5px"} >
                <Grid xs={12} md={11} sx={{justifyContent: "center"}} >
                    <Item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                        <Grid xs={12} md={6} sx={{display: "grid", justifyContent: "center"}}>
                            <Typography variant='h4'>Contact Us!</Typography>
                            <Card sx={{ maxWidth: 400, backgroundColor: "#7cb9e8", width: "100vw" }} >
                                <CardContent sx={{ textAlign: "left", rowGap: 1, display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                                    <Typography variant='h5' sx={{ textAlign: "center" }}>info@lexsynergy.com</Typography>
                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}>United Kingdom</Typography>
                                    <Typography variant='h10'>130 Hampstead House</Typography>
                                    <Typography variant='h10'>176 Finchley Road</Typography>
                                    <Typography variant='h10'>London NW3 6BT</Typography>
                                    <Typography variant='h10'>+44 20 313 70459</Typography>
                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}>Republic of Ireland</Typography>
                                    <Typography variant='h10'>+353 1 293 0365</Typography>
                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}>USA</Typography>
                                    <Typography variant='h10'>+1 858 225 1318</Typography>
                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}>South Africa</Typography>
                                    <Typography variant='h10'>+27 10 500 3913</Typography>
                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}>Australia</Typography>
                                    <Typography variant='h10'>+61 73 1033304</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} md={6} sx={{display: "grid", justifyContent: "center"}}>
                            <Typography variant='h4'>Let Us Contact You!</Typography>
                            <Card sx={{ maxWidth: 400, backgroundColor: "#7cb9e8", width: "100vw" }} >
                                <CardContent sx={{ textAlign: "left", rowGap: 1, display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                                    <TextField required id='nameField' label="Name" />
                                    <TextField required id='emailField' label="Email Address" />
                                    <TextField id='phoneField' label="Phone Number" />
                                    <TextField id="areaOfInterest" select label="Area of Interest" helperText="Please select your area of interest">
                                        {businessArea.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField id='infoField' label="Topic Information" multiline minRows={5} />
                                    <Button variant="contained">Submit</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Contact;
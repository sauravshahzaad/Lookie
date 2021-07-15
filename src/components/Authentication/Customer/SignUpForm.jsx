import { Box, Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

function SignUpForm() {
    const classes = useStyles();
    return (
        <Box my={4}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="userName"
                            label="User Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid>
                        <Button variant="contained">SignUp</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default SignUpForm

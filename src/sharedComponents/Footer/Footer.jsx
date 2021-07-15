// import {
//     Typography,
//     //  Toolbar, 
//     //  Container, 
//     //  AppBar, 
//     Box,
//     Grid
// } from "@material-ui/core";



// export default function Footer() {
//     return (
//         <Box mt={2} width="100%">
//             {/* <footer>
//                 <AppBar position="relative" color="primary">
//                     <Container maxWidth="md">
//                         <Toolbar>
//                             <Typography variant="body1" color="inherit">
//                                 © 2019 Gistia
//                             </Typography>
//                         </Toolbar>
//                     </Container>
//                 </AppBar>
//             </footer> */}
//             <footer style={{
//                 backgroundColor: "#261e1e",
//                 position: "relative"
//             }}>
//                 <Grid container direction="column" justify="center" alignItems="center">
//                     <Grid item container direction="row" justify="space-evenly" alignItems="center" style={{ backgroundColor: "#2f2929" }} >
//                         <Grid item ><a href="https://www.facebook.com/Bewtifly/" ><Typography color="secondary">Facebook</Typography></a></Grid>
//                         <Grid item><a href="https://www.instagram.com/Bewtifly/"><Typography color="secondary">Instagram</Typography></a></Grid>
//                         <Grid item><a href="https://twitter.com/bewtifly" ><Typography color="secondary">Twitter</Typography></a></Grid>
//                     </Grid>
//                     <Grid item container direction="column" justify="center" alignItems="center" >
//                         <Grid item container direction="row" justify="center" alignItems="center">
//                             <Box>
//                                 <Typography color="secondary">Copyright &#169; 2021 Bewtifly |  &#128241;  7573-050-753</Typography>
//                             </Box>
//                         </Grid>
//                         <Grid item container direction="row" justify="center" alignItems="center">
//                             <Typography color="secondary">A Product From<a href="http://google.com">Beta Code Technologies</a></Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>


//             </footer>
//         </Box>
//     )
// }

import './Footer.css';

import { Link } from 'react-router-dom';
import React from 'react';
import { Typography } from '@material-ui/core';

// import { Button } from "@material-ui/core";


function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section> */}
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>TRVL © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
            <Typography variant="body2" color="textSecondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </div>
    );
}

export default Footer;

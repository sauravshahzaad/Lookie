import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import Discover from "./Discover"
export default function CarouselSlide(props) {
    const {
        backgroundImage,
        //  title
    } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            // backgroundColor,
            backgroundImage,
            borderRadius: 5,
            backgroundSize: "cover",
            backgroundColor: "black",
            // padding: '75px 50px',
            // margin: '0px 25px',
            backgroundBlendMode: "luminosity",
            width: '100vw',
            height: "98vh",
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        }
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Discover />
        </Card>
    );
}
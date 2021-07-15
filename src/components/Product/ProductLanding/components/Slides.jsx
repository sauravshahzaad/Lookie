import React, { useEffect, useState } from 'react'
import CarouselSlide from './CarouselSlide';
import { SLIDE_INFO } from '../ProductLanding.pageConstants';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 1
    },
}));
// function Arrow(props) {
//     const { direction, clickFunction } = props;
//     const icon = direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

//     return <div onClick={clickFunction}>{icon}</div>;
// }
function Slides() {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    // const onArrowClick = (direction) => {
    //     const increment = direction === 'left' ? -1 : 1;
    //     const newIndex = (index + increment + numSlides) % numSlides;
    //     setIndex(newIndex);
    // };
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');
    console.log(slideIn, slideDirection)
    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 100);
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //         onArrowClick("right")
    //     }, 10000)
    // }, [])
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            {/* <Grid item>
                <Arrow
                    direction='left'
                    clickFunction={() => onArrowClick('left')}
                />
            </Grid> */}
            <Grid item>
                <CarouselSlide content={content} />
            </Grid>
            {/* <Grid item>
                <Arrow
                    direction='right'
                    clickFunction={() => onArrowClick('right')}
                />
            </Grid> */}



        </Grid>
    )
}

export default Slides

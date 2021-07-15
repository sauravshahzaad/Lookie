import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { SHOP_ROUTE } from '../../../../configurations/routing/routeConstants';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function ShpCard({ shop }) {
    const classes = useStyles();
    // console.log(shop, "All Shops")
    const history = useHistory()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={shop.img}
                    title="Contemplative Reptile"
                    style={{
                        width: "250px"
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {shop.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {shop.address.name}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions style={{
                float: "right"
            }}>
                <Button size="small" float="right" color="primary" disabled={!shop.open}
                    onClick={() => {
                        history.push({
                            pathname: SHOP_ROUTE,
                            state: shop
                        })
                    }}
                >
                    Open Now
                </Button>

            </CardActions>
        </Card>
    );
}


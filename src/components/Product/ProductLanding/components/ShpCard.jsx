import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { SHOP_ROUTE } from '../../../../configurations/routing/routeConstants';
import Typography from '@material-ui/core/Typography';
import { applicationActions } from '../../../../actions/application';
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

export function ShpCard(props) {
    const classes = useStyles();
    // console.log(shop, "All Shops")
    const history = useHistory()
    const { shop } = props
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
                        props.actions.shopSelect(shop)
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

const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    selectedShop: state.application.shop

})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        shopSelect: (shop) => {
            return dispatch(applicationActions.shopSelect(shop))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShpCard)


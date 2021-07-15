import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import ShopAbout from './ShopAbout';
import ShopReview from './ShopReview';
import ShopServices from './ShopServices';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        display: "flex",
        justifyContent: "center"
    }
}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    // console.log(props)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs className={classes.tab} value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="Services" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />
                    <Tab label="Book Appointment" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ShopAbout shop={props.shop} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ShopServices shop={props.shop} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ShopReview shop={props.shop} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
        </div>
    );
}

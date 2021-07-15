import "./index.css";

import React, { Suspense } from "react";

import App from "./App";
// import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "./sharedComponents/Loading/Loading"
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
// const NewApp = React.lazy(() => import('./components/NewApp')); /
import history from './configurations/routing/history'
import store from "./configurations/redux/store";
import theme from './configurations/materialUi/theme'

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <CssBaseline />
          <App />
        </Suspense>
      </Router>
    </ThemeProvider>
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root")
);

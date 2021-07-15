// NPM Imports
import React, {
  // Suspense
} from 'react'
// import Loading from '../../sharedComponents/Loading/Loading'
import {
  Route
} from 'react-router-dom'
// Config Imports
import {
  getAllRoutesArray
} from '../../configurations/routing/AppNavigation'
// import history from './history'
import { withRouter } from 'react-router'

const AuthenticatedRoute = ({ children, ...rest }) => {

  return (

    < Route
      {...rest}
      render={({ location }) => {
        return children
      }}
    />
  )
}




const allAppRoutes = getAllRoutesArray()

const routes = allAppRoutes.map((route, index) => {
  const { component: Component } = route
  return (
    <AuthenticatedRoute
      key={route.path}
      path={route.path}
      exact={route.exact}
    >
      <Component />
    </AuthenticatedRoute>
  )
})

const ApplicationRouter = () => (
  // <Router history={history}>
  //   <Suspense fallback={<Loading />}>
  //     <Switch>
  <>{routes}</>
  //     </Switch>
  //   </Suspense>
  // </Router>
)

export default withRouter(ApplicationRouter)

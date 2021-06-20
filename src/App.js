import { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsEditor = lazy(() => import('../src/components/contactsEditor/contactsEditor'));

class App extends Component {
  componentDidMount(){
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              exact
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsEditor}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);


import Header from '../components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NutriportApp from '../components/NutriportApp';
import TestNavComponent from '../components/TestNavComponent';

const PageNotFound = () => (
    <div>
        404!
    </div>
);

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={NutriportApp} exact={true}></Route>
                <Route path='/test' component={TestNavComponent}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter

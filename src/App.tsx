import { Redirect, Route, Switch } from 'react-router-dom';
import { Page } from './components/page/Page';

import { Main } from './pages/Main';
import { Providers } from './Providers';

export const App = () => (
    <Providers>
        <Switch>
            <Route exact path="/" component={Main} />
            <Redirect exact from="*" to="/" />
        </Switch>
    </Providers>
);

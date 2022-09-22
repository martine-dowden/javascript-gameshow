import { h } from 'preact';
import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from './routes/home/home';
import NewGame from './routes/game/gameNew';
import GameStart from './routes/game/gameStart';
import GameFinish from './routes/game/gameFinish';
import Question from './routes/game/q/question';

import Error404 from './routes/error/error404';

export interface UrlRouteProps {
    gameId: string,
    questionIdx: string
}

const App = () => (
	<main id="app">
        <Router>
            <Route path="/" component={Home} />
            <Route path="/game/new" component={NewGame} />
            <Route path="/game/:gameId" component={GameStart} />
            <Route path="/game/:gameId/q/:questionIdx" component={Question} />
            <Route path="/game/:gameId/finish" component={GameFinish} />

            <Route path="/error/404" component={Error404} />
        </Router>
    </main>
);

export default App;
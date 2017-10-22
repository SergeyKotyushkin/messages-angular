import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import expressSession = require('express-session');
import { IndexRoute } from '../routes/index.route';
import { ApiRoute } from '../routes/api.route';

export class Server {

    private _rootPath: string;

    public app: express.Application;

    public constructor(rootPath: string) {
        this._rootPath = rootPath;

        this.app = express();

        this.config();

        this.routes();
    }

    public config() {
        this.app.use('/favicon.ico', express.static('client/favicon.ico'));
        this.app.use(
            '*/dist',
            express.static(
                path.join(this._rootPath, 'out', 'client', 'dist'),
                { extensions: ['gz', 'js.gz', 'js'] }
            )
        );

        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(expressSession({ secret: 'true', resave: true, saveUninitialized: false }));

        //catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });
    }

    public routes() {
        let router: express.Router = express.Router();

        //ApiRoute
        ApiRoute.applyRoutes(router);

        //IndexRoute
        IndexRoute.applyRoutes(router);

        //use router middleware
        this.app.use(router);
    }
}

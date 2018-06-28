import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import * as debug from 'debug';

export class ApiRoute {

    public static applyRoutes(router: Router) {
        router.get("/api/info", (req: Request, res: Response, next: NextFunction) => {
            this._info(req, res, next);
        });

        router.post("/api/logs", (req: Request, res: Response, next: NextFunction) => {
            this._clientLogs(req, res, next);
        });
    }

    private static _clientLogs(req: Request, res: Response, next: NextFunction) {
        const data = req.body;

        //todo: write to file
        debug('clientLogs')(data);
    }

    private static _info(req: Request, res: Response, next: NextFunction) {
        debug('server')('req.user: ', req.user);
        let info = {
            appName: 'messages',
            version: '0.0.1'
        };

        res.json(info);
    }
}

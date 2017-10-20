import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';

export class ApiRoute {

    public static applyRoutes(router: Router) {

        router.get("/api/info", (req: Request, res: Response, next: NextFunction) => {
            this._info(req, res, next);
        });
    }

    private static _info(req: Request, res: Response, next: NextFunction) {
        let info = {
          appName: 'messages',
          version: '0.0.1'
        };

        res.json(info);
    }
}

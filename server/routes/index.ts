import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';

export class IndexRoute {

    public static applyRoutes(router: Router) {
        router.get("*", (req: Request, res: Response, next: NextFunction) => {
            this._index(req, res, next);
        });
    }

    private static _index(req: Request, res: Response, next: NextFunction) {
        let filePath = path.resolve(path.join('out', 'client', 'index.html'));

        res.sendFile(filePath);
    }
}

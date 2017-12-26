import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as debug from 'debug';

export class HttpHelper {

    public static extractArrayData(res: Response) {
        return res.json() || [];
    }

    public static extractObjectData(res: Response) {
        return res.json() || {};
    }

    public static handleError(error: Response | any) {
        let errMsg = error instanceof Response
            ? `${error.status} - ${error.statusText || ''}`
            : error.message ? error.message : error.toString();

        return Observable.throw(errMsg);
    }
}

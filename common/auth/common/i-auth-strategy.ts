import { Application } from 'express';

export interface IAuthStrategy {
    initialize(app: Application);
}

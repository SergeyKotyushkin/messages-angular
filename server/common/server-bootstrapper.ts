import { Server } from './server';
import * as express from 'express';
import * as http from 'http';
import * as debug from 'debug';


export class ServerBootstrapper {

    private _httpPort: number | string | boolean;
    private _server: Server;
    private _app: express.Application;
    private _httpServer: any;
    private _debug = debug('server');


    public constructor(rootPath: string) {
        this._server = new Server(rootPath);
        this._app = this._server.app;
        this._httpPort = this._normalizePort(process.env.port || '3000');
        this._app.set("port", this._httpPort);
    }

    public bootstrap() {

        this._httpServer = http.createServer(this._app);

        this._httpServer.listen(this._httpPort);
        this._httpServer.on('error', (error) => this._onError(error));
        this._httpServer.on('listening', () => this._onListening());
    }

    private _normalizePort(val: string): number | string | boolean {
        let port: number = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }

    private _onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof this._httpPort === 'string'
            ? 'Pipe ' + this._httpPort
            : 'Port ' + this._httpPort;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    private _onListening() {
        let addr = this._httpServer.address();
        var bind = typeof addr === 'string'
          ? 'pipe ' + addr
          : 'port ' + addr.port;
      this._debug('Listening on ' + bind);
    }

}

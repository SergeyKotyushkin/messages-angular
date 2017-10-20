import { ServerBootstrapper } from '../common/server-bootstrapper';
import * as appRoot from 'app-root-path'


let serverBootstrapper = new ServerBootstrapper(appRoot.toString());
serverBootstrapper.bootstrap();

/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import Router from 'express-promise-router';
import {
  createServiceBuilder,
  loadBackendConfig,
  getRootLogger,
  useHotMemoize,
  notFoundHandler,
  CacheManager,
  DatabaseManager,
  HostDiscovery,
  UrlReaders,
  ServerTokenManager,
} from '@backstage/backend-common';
import { TaskScheduler } from '@backstage/backend-tasks';
import { Config } from '@backstage/config';
import app from './plugins/app';
import auth from './plugins/auth';
import catalog from './plugins/catalog';
import scaffolder from './plugins/scaffolder';
import proxy from './plugins/proxy';
import techdocs from './plugins/techdocs';
import search from './plugins/search';
// Import the foo modules
import foo1 from './plugins/foo1';
import foo2 from './plugins/foo2';
import foo3 from './plugins/foo3';
import foo4 from './plugins/foo4';
import foo5 from './plugins/foo5';
import foo6 from './plugins/foo6';
import foo7 from './plugins/foo7';
import foo8 from './plugins/foo8';
import foo9 from './plugins/foo9';
import foo10 from './plugins/foo10';
import foo11 from './plugins/foo11';
import foo12 from './plugins/foo12';
import foo13 from './plugins/foo13';
import foo14 from './plugins/foo14';
import foo15 from './plugins/foo15';
import foo16 from './plugins/foo16';
import foo17 from './plugins/foo17';
import foo18 from './plugins/foo18';
import foo19 from './plugins/foo19';
import foo20 from './plugins/foo20';
import foo21 from './plugins/foo21';
import foo22 from './plugins/foo22';
import foo23 from './plugins/foo23';
import foo24 from './plugins/foo24';
import foo25 from './plugins/foo25';
import foo26 from './plugins/foo26';
import foo27 from './plugins/foo27';
import foo28 from './plugins/foo28';
import foo29 from './plugins/foo29';
import foo30 from './plugins/foo30';
import foo31 from './plugins/foo31';
import foo32 from './plugins/foo32';
import foo33 from './plugins/foo33';
import foo34 from './plugins/foo34';
import foo35 from './plugins/foo35';
import foo36 from './plugins/foo36';
import foo37 from './plugins/foo37';
import foo38 from './plugins/foo38';
import foo39 from './plugins/foo39';
import foo40 from './plugins/foo40';
import foo41 from './plugins/foo41';
import foo42 from './plugins/foo42';
import foo43 from './plugins/foo43';
import foo44 from './plugins/foo44';
import foo45 from './plugins/foo45';
import foo46 from './plugins/foo46';
import foo47 from './plugins/foo47';
import foo48 from './plugins/foo48';
import foo49 from './plugins/foo49';
import foo50 from './plugins/foo50';
import { PluginEnvironment } from './types';
import { ServerPermissionClient } from '@backstage/plugin-permission-node';
import { DefaultIdentityClient } from '@backstage/plugin-auth-node';

function makeCreateEnv(config: Config) {
  const root = getRootLogger();
  const reader = UrlReaders.default({ logger: root, config });
  const discovery = HostDiscovery.fromConfig(config);
  const cacheManager = CacheManager.fromConfig(config);
  const databaseManager = DatabaseManager.fromConfig(config, { logger: root });
  const tokenManager = ServerTokenManager.noop();
  const taskScheduler = TaskScheduler.fromConfig(config, { databaseManager });

  const identity = DefaultIdentityClient.create({
    discovery,
  });
  const permissions = ServerPermissionClient.fromConfig(config, {
    discovery,
    tokenManager,
  });

  root.info(`Created UrlReader ${reader}`);

  return (plugin: string): PluginEnvironment => {
    const logger = root.child({ type: 'plugin', plugin });
    const database = databaseManager.forPlugin(plugin);
    const cache = cacheManager.forPlugin(plugin);
    const scheduler = taskScheduler.forPlugin(plugin);
    return {
      logger,
      database,
      cache,
      config,
      reader,
      discovery,
      tokenManager,
      scheduler,
      permissions,
      identity,
    };
  };
}

async function main() {
  const config = await loadBackendConfig({
    argv: process.argv,
    logger: getRootLogger(),
  });
  const createEnv = makeCreateEnv(config);

  const catalogEnv = useHotMemoize(module, () => createEnv('catalog'));
  const scaffolderEnv = useHotMemoize(module, () => createEnv('scaffolder'));
  const authEnv = useHotMemoize(module, () => createEnv('auth'));
  const proxyEnv = useHotMemoize(module, () => createEnv('proxy'));
  const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));
  const searchEnv = useHotMemoize(module, () => createEnv('search'));
  const appEnv = useHotMemoize(module, () => createEnv('app'));
  const foo1Env = useHotMemoize(module, () => createEnv('foo1'));
  const foo2Env = useHotMemoize(module, () => createEnv('foo2'));
  const foo3Env = useHotMemoize(module, () => createEnv('foo3'));
  const foo4Env = useHotMemoize(module, () => createEnv('foo4'));
  const foo5Env = useHotMemoize(module, () => createEnv('foo5'));
  const foo6Env = useHotMemoize(module, () => createEnv('foo6'));
  const foo7Env = useHotMemoize(module, () => createEnv('foo7'));
  const foo8Env = useHotMemoize(module, () => createEnv('foo8'));
  const foo9Env = useHotMemoize(module, () => createEnv('foo9'));
  const foo10Env = useHotMemoize(module, () => createEnv('foo10'));
  const foo11Env = useHotMemoize(module, () => createEnv('foo11'));
  const foo12Env = useHotMemoize(module, () => createEnv('foo12'));
  const foo13Env = useHotMemoize(module, () => createEnv('foo13'));
  const foo14Env = useHotMemoize(module, () => createEnv('foo14'));
  const foo15Env = useHotMemoize(module, () => createEnv('foo15'));
  const foo16Env = useHotMemoize(module, () => createEnv('foo16'));
  const foo17Env = useHotMemoize(module, () => createEnv('foo17'));
  const foo18Env = useHotMemoize(module, () => createEnv('foo18'));
  const foo19Env = useHotMemoize(module, () => createEnv('foo19'));
  const foo20Env = useHotMemoize(module, () => createEnv('foo20'));
  const foo21Env = useHotMemoize(module, () => createEnv('foo21'));
  const foo22Env = useHotMemoize(module, () => createEnv('foo22'));
  const foo23Env = useHotMemoize(module, () => createEnv('foo23'));
  const foo24Env = useHotMemoize(module, () => createEnv('foo24'));
  const foo25Env = useHotMemoize(module, () => createEnv('foo25'));
  const foo26Env = useHotMemoize(module, () => createEnv('foo26'));
  const foo27Env = useHotMemoize(module, () => createEnv('foo27'));
  const foo28Env = useHotMemoize(module, () => createEnv('foo28'));
  const foo29Env = useHotMemoize(module, () => createEnv('foo29'));
  const foo30Env = useHotMemoize(module, () => createEnv('foo30'));
  const foo31Env = useHotMemoize(module, () => createEnv('foo31'));
  const foo32Env = useHotMemoize(module, () => createEnv('foo32'));
  const foo33Env = useHotMemoize(module, () => createEnv('foo33'));
  const foo34Env = useHotMemoize(module, () => createEnv('foo34'));
  const foo35Env = useHotMemoize(module, () => createEnv('foo35'));
  const foo36Env = useHotMemoize(module, () => createEnv('foo36'));
  const foo37Env = useHotMemoize(module, () => createEnv('foo37'));
  const foo38Env = useHotMemoize(module, () => createEnv('foo38'));
  const foo39Env = useHotMemoize(module, () => createEnv('foo39'));
  const foo40Env = useHotMemoize(module, () => createEnv('foo40'));
  const foo41Env = useHotMemoize(module, () => createEnv('foo41'));
  const foo42Env = useHotMemoize(module, () => createEnv('foo42'));
  const foo43Env = useHotMemoize(module, () => createEnv('foo43'));
  const foo44Env = useHotMemoize(module, () => createEnv('foo44'));
  const foo45Env = useHotMemoize(module, () => createEnv('foo45'));
  const foo46Env = useHotMemoize(module, () => createEnv('foo46'));
  const foo47Env = useHotMemoize(module, () => createEnv('foo47'));
  const foo48Env = useHotMemoize(module, () => createEnv('foo48'));
  const foo49Env = useHotMemoize(module, () => createEnv('foo49'));
  const foo50Env = useHotMemoize(module, () => createEnv('foo50'));

  const apiRouter = Router();
  apiRouter.use('/catalog', await catalog(catalogEnv));
  apiRouter.use('/scaffolder', await scaffolder(scaffolderEnv));
  apiRouter.use('/auth', await auth(authEnv));
  apiRouter.use('/techdocs', await techdocs(techdocsEnv));
  apiRouter.use('/proxy', await proxy(proxyEnv));
  apiRouter.use('/search', await search(searchEnv));
  apiRouter.use('/foo1', await foo1(foo1Env));
  apiRouter.use('/foo2', await foo2(foo2Env));
  apiRouter.use('/foo3', await foo3(foo3Env));
  apiRouter.use('/foo4', await foo4(foo4Env));
  apiRouter.use('/foo5', await foo5(foo5Env));
  apiRouter.use('/foo6', await foo6(foo6Env));
  apiRouter.use('/foo7', await foo7(foo7Env));
  apiRouter.use('/foo8', await foo8(foo8Env));
  apiRouter.use('/foo9', await foo9(foo9Env));
  apiRouter.use('/foo10', await foo10(foo10Env));
  apiRouter.use('/foo11', await foo11(foo11Env));
  apiRouter.use('/foo12', await foo12(foo12Env));
  apiRouter.use('/foo13', await foo13(foo13Env));
  apiRouter.use('/foo14', await foo14(foo14Env));
  apiRouter.use('/foo15', await foo15(foo15Env));
  apiRouter.use('/foo16', await foo16(foo16Env));
  apiRouter.use('/foo17', await foo17(foo17Env));
  apiRouter.use('/foo18', await foo18(foo18Env));
  apiRouter.use('/foo19', await foo19(foo19Env));
  apiRouter.use('/foo20', await foo20(foo20Env));
  apiRouter.use('/foo21', await foo21(foo21Env));
  apiRouter.use('/foo22', await foo22(foo22Env));
  apiRouter.use('/foo23', await foo23(foo23Env));
  apiRouter.use('/foo24', await foo24(foo24Env));
  apiRouter.use('/foo25', await foo25(foo25Env));
  apiRouter.use('/foo26', await foo26(foo26Env));
  apiRouter.use('/foo27', await foo27(foo27Env));
  apiRouter.use('/foo28', await foo28(foo28Env));
  apiRouter.use('/foo29', await foo29(foo29Env));
  apiRouter.use('/foo30', await foo30(foo30Env));
  apiRouter.use('/foo31', await foo31(foo31Env));
  apiRouter.use('/foo32', await foo32(foo32Env));
  apiRouter.use('/foo33', await foo33(foo33Env));
  apiRouter.use('/foo34', await foo34(foo34Env));
  apiRouter.use('/foo35', await foo35(foo35Env));
  apiRouter.use('/foo36', await foo36(foo36Env));
  apiRouter.use('/foo37', await foo37(foo37Env));
  apiRouter.use('/foo38', await foo38(foo38Env));
  apiRouter.use('/foo39', await foo39(foo39Env));
  apiRouter.use('/foo40', await foo40(foo40Env));
  apiRouter.use('/foo41', await foo41(foo41Env));
  apiRouter.use('/foo42', await foo42(foo42Env));
  apiRouter.use('/foo43', await foo43(foo43Env));
  apiRouter.use('/foo44', await foo44(foo44Env));
  apiRouter.use('/foo45', await foo45(foo45Env));
  apiRouter.use('/foo46', await foo46(foo46Env));
  apiRouter.use('/foo47', await foo47(foo47Env));
  apiRouter.use('/foo48', await foo48(foo48Env));
  apiRouter.use('/foo49', await foo49(foo49Env));

  apiRouter.use('/foo50', await foo50(foo50Env));

  // Add backends ABOVE this line; this 404 handler is the catch-all fallback
  apiRouter.use(notFoundHandler());

  const service = createServiceBuilder(module)
    .loadConfig(config)
    .addRouter('/api', apiRouter)
    .addRouter('', await app(appEnv));

  await service.start().catch(err => {
    console.log(err);
    process.exit(1);
  });
}

module.hot?.accept();
main().catch(error => {
  console.error('Backend failed to start up', error);
  process.exit(1);
});

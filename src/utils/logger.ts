import packageJson from '../../package.json';

type LoggingFunction = (...args: Array<unknown>) => void;

type Logger = {
  debug: LoggingFunction;
  error: LoggingFunction;
  info: LoggingFunction;
  log: LoggingFunction;
  trace: LoggingFunction;
  warn: LoggingFunction;
};

const packageInfo = `${packageJson.name} (${packageJson.version})`;

export const logger: Logger = {
  debug: (...args) => __DEV__ && console.debug(packageInfo, ...args),
  error: (...args) => __DEV__ && console.error(packageInfo, ...args),
  info: (...args) => __DEV__ && console.info(packageInfo, ...args),
  log: (...args) => __DEV__ && console.log(packageInfo, ...args),
  trace: (...args) => __DEV__ && console.trace(packageInfo, ...args),
  warn: (...args) => __DEV__ && console.warn(packageInfo, ...args),
};

import env from './shared/app-env';

export const { NODE_ENV } = process.env;

const ENV = NODE_ENV || 'dev';

// if testing, just grab local config:
const config = { ...env[ENV] };

export default config;

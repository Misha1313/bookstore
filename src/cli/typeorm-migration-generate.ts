import * as argsParser from 'yargs-parser';

import { childProcOut } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spawn } = require('child_process');

const args = argsParser(process.argv.slice(2));

const app = args.app || 'rms-admin-x-api';
const market = args.market || 'com';
const name = args.name || 'Migration';
console.log('args', args.name);

const childProc = spawn(
  `npm run typeorm -- migration:generate ./src/database/migrations/${name} -d ./src/database/typeorm.config.ts -p -t`,
  {
    shell: true
  }
);

childProcOut(childProc);

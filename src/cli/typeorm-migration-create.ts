import * as argsParser from 'yargs-parser';

import { childProcOut } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spawn } = require('child_process');

const args = argsParser(process.argv.slice(2));
const app = args.app || 'rms-admin-x-api';
const name = args.name || 'Migration';


const childProc = spawn(
  `npm run typeorm -- migration:create ./src/database/migrations/${name}`,
  {
    shell: true
  }
);

childProcOut(childProc);

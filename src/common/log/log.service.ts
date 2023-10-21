import { Inject, Injectable } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';

@Injectable()
export class LogService {
    constructor(@Inject(INQUIRER) private parentClass: object) {}

    logInConsole() {
        console.log(`${this.parentClass?.constructor?.name}`);
    }

}

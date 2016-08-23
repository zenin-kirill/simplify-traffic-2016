import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'users-table',
    templateUrl: 'users-table.html',
    directives: [ROUTER_DIRECTIVES]
})

export class UsersTableComponent {}

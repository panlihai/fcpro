/* 	spreadjs */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SpreadService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSCOMPONENT");
  }
}

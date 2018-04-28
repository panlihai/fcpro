import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styles: [``]
})
export class CheckComponent extends ComponentParent {
  checkValue: string = 'a';
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  checkOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  checkOptionsreadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b', }, { icon: '', label: 'C', value: 'c'}];
  constructor(public mainService: ComponentService) {
    super('FCCHECK', mainService);
  }
}


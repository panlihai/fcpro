import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent } from 'fccomponent';
import { SpreadService } from '../../services/spread.service';
import { saveAs } from 'file-saver';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Component({
  selector: 'basicspread',
  template: `
  <fc-title fcLabel="spreadjs demo"></fc-title>
  <gc-spread-sheets (workbookInitialized)="workbookInit($event)">
  </gc-spread-sheets>
  <button (click)="exportExcel()">导出</button>
  `,
  styles: [`
  
  `]
})
export class BasicspreadComponent extends ParentComponent {
  title = 'app';
  spread: any;
  constructor(public mainService: SpreadService, public router: Router,
    public activedRoute: ActivatedRoute, private http: Http) {
    super(mainService, router, activedRoute);
  }
  init(): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  getDefaultQuery() {
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {
  }
  event(eventName: string, context: any): void {
  }
  workbookInit(args) {
    this.spread = args.spread;
    this.getdata().subscribe(res => {
      this.spread.fromJSON(res);
    });
  }
  exportExcel() {
    let fileName = 'test.xlsx';
    if (fileName.substr(-5, 5) !== '.xlsx') {
      fileName += '.xlsx';
    }
    const json = this.spread.toJSON({ includeBindingSource: true });
    const excelIO = new GC.Spread.Excel.IO();
    excelIO.save(json, function (blob: any) {
      saveAs(blob, fileName);
    }, function (err: any) {
      console.log(err);
    });
  }
  getdata() {
    return this.http.get('../../../../assets/plugin/spread/data.json')
      .map(res => res.json());
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ParentComponent } from 'fccomponent';
@Component({
  selector: 'spreaddemo',
  templateUrl: './spreaddemo.component.html',
  styles: [`
  
  `]
})
export class SpreaddemoComponent{
  title = 'app';
  spread: any;
  constructor( private http: Http) {
    
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
    return this.http.get('../../../assets/plugin/spread/data.json')
      .map(res => res.json());
  }
}

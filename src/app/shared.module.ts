import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FcadModule, FcbasicModule, FclayoutModule, FcnavModule } from 'fccomponent';
import { BrowserModule } from '@angular/platform-browser';
// delon
// i18n

// region: third libs
// endregion

// region: your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // third libs
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    exports: [
        CommonModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }

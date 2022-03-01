import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';




@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    ProgressBarModule,
    ProgressSpinnerModule,
  ]
})
export class PrimeNgModule { }

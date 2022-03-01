import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressBarModule} from 'primeng/progressbar';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';




@NgModule({
  exports: [
    CardModule,
    DividerModule,
    ProgressSpinnerModule,
    FieldsetModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    ProgressBarModule,
    PasswordModule,
    ToastModule
  ]
})
export class PrimeNgModule { }

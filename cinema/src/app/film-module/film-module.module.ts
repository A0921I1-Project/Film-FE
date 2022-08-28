import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmListComponent} from './film-list/film-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilmCreateComponent } from './film-create/film-create.component';

@NgModule({
  declarations: [FilmListComponent, FilmCreateComponent],
  exports: [
    FilmListComponent,
    FilmCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // FilmModuleRoutingModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   timeOut: 1500,
    //   progressBar: true,
    //   progressAnimation: 'increasing',
    //   preventDuplicates: true
    // })
  ]
})
export class FilmModuleModule {
}

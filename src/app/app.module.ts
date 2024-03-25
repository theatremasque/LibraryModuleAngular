import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { QueryPublicationComponent } from './query-publication/query-publication.component';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { StateBoxComponent } from './state-box/state-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    QueryPublicationComponent,
    StateBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    TriStateCheckboxModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

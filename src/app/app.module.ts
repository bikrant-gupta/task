import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatRippleModule} from '@angular/material/core';

import {FormComponent} from './components/form/form.component'
import {FlashCardComponent} from './components/flash-card/flash-card.component'
import {AllCardsComponent} from './components/all-cards/all-cards.component'

import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AllCardsComponent,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

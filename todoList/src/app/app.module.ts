import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

// components 
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { DialogComponent } from './components/dialog/dialog.component';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppEffects } from './app.effects';

const MATERIAL = [ MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatDialogModule ]

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...MATERIAL,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },

    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataUpdateService } from './data-update.service';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ImagesListComponent } from './images-list/images-list.component';
import { SpinnerLoadingComponent } from './spinner-loading/spinner-loading.component';
=======
>>>>>>> b17e26589dc7cdbe78f6fd5e22ae4d0b1c22687c



@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    ImagesListComponent,
    SpinnerLoadingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

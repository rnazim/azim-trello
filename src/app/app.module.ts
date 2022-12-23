import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyAJ5Ma-0X2K5gptT-jx3zXKhdxqoQ5Riug",
  authDomain: "oncom-angular.firebaseapp.com",
  projectId: "oncom-angular",
  storageBucket: "oncom-angular.appspot.com",
  messagingSenderId: "80718435225",
  appId: "1:80718435225:web:671f0d8b6ff09d7f22b908",
  measurementId: "G-VG9MH6G3TP"
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PageStudentListComponent } from './pages/page-student-list/page-student-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

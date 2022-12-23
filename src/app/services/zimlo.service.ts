import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IZimlo, PLAN } from '../interfaces/i-zimlo';

@Injectable({
  providedIn: 'root'
})
export class ZimloService{
  public isShow: boolean = false;
  collection: string = "tasks";

  constructor(private firestore: AngularFirestore) { }

  init() {
      let payload = {
        title: 'Your title here',
        description: 'Your description here',
        status: PLAN
      } as IZimlo;
      this.firestore.collection(this.collection).add(payload);
  }
}

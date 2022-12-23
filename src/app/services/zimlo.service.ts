import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { IZimlo, PLAN } from '../interfaces/i-zimlo';

@Injectable({
  providedIn: 'root'
})
export class ZimloService{
  public isShow: boolean = false;
  collection: string = "Tasks";

  constructor(private firestore: AngularFirestore) { }

  init() {
      let payload = {
        title: 'Your title here',
        description: 'Your description here',
        status: PLAN
      } as IZimlo;
      this.firestore.collection(this.collection).add(payload);
  }

  all(status: string) {
    return this.firestore.collection(
      this.collection,
      ref => ref.where('status', '==', status)).snapshotChanges();
  }

  update(id: string, task: IZimlo) {
    return this.firestore.doc(`${this.collection}/` + id).update(task);
  }
}

import { Component } from '@angular/core';
import { DONE, IZimlo, PLAN, TODO } from 'src/app/interfaces/i-zimlo';
import { ZimloService } from 'src/app/services/zimlo.service';

@Component({
  selector: 'app-card-done',
  templateUrl: './card-done.component.html',
  styleUrls: ['./card-done.component.css']
})
export class CardDoneComponent {
  tasks: IZimlo[] =[];
  statusTodo: string = TODO;
  statusPlan: string = PLAN;

  constructor(private zimloService: ZimloService) { }

  ngOnInit(): void {
      this.onAll();
  }

  onAll(): void{
    this.zimloService.all(DONE).subscribe(
      (data: any) => {
        this.tasks = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            title: e.payload.doc.data()['title'],
            description: e.payload.doc.data()['description'],
            status: e.payload.doc.data()['status'],
          }as IZimlo;
        })
      }
    )
  }

  onUpdate(id:string, task: IZimlo): void {
    this.zimloService.update(id, task);
  }
}

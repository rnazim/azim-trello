import { Component, OnInit } from '@angular/core';
import { ZimloService } from 'src/app/services/zimlo.service';

@Component({
  selector: 'app-zimlo-navbar',
  templateUrl: './zimlo-navbar.component.html',
  styleUrls: ['./zimlo-navbar.component.css']
})
export class ZimloNavbarComponent implements OnInit {

  constructor(public zimloService: ZimloService) {}

  ngOnInit(): void {
      // this.zimloService.isShow = true;
  }

  onInit(): void {
    this.zimloService.init();
  }

}

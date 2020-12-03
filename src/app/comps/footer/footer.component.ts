import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   date:Date = new Date();
  year:any; 
  constructor() { }

  ngOnInit(): void {

    this.year = this.date.getFullYear();
  }

  onNavigate(){
    window.open("https://www.google.co.il/maps/search/%D7%94%D7%A6%D7%95%D7%A8%D7%A4%D7%99%D7%9D%E2%80%AD/@31.7621845,35.2781312,12z/data=!3m1!4b1", "_blank");
}

}

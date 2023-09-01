import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertaindata:any=[]
  constructor(private apiservice:NewsapiService){}
  ngOnInit(): void {
    this.apiservice.ent().subscribe((res)=>{
      console.log(res.articles)
      this.entertaindata=res.articles
    })
  }
}

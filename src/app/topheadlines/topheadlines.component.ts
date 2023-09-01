import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {
constructor(private apiservice:NewsapiService){}
dataarray:any=[]
ngOnInit(): void {
  this.apiservice.headlines().subscribe((res)=>{
    console.log(res.articles)
    this.dataarray=res.articles
  })
}
}

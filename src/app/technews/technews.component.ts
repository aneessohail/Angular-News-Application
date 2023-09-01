import { Component ,OnInit} from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  techdata:any=[]
  constructor(private apiservice:NewsapiService){}
ngOnInit(): void {
  this.apiservice.technology().subscribe((res)=>{
    console.log(res.articles)
    this.techdata=res.articles
  })
}
}

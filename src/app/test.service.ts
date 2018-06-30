import{HttpModule, Http} from '@angular/http';
import { OnInit, Component } from '@angular/core';

@Component({
 selector:'service',
 template:`<p>anu</p>
 <div  *ngIf ="data" class="col-md-7">
           <div *ngFor ="let n of data">
            <h3>{{n.id}}</h3></div>`
            
})
export class Service implements OnInit
{
  
    data: any;
    constructor(private http: Http )
 
 {

 }   
ngOnInit()
{
 this.http.get('https://api.github.com/users').subscribe(
 d => {
    this.data =d;
    console.log(this.data);
    
  }
)
}
}
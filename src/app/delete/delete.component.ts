import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Structure } from '../str';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient, private ds: DataService) { }

  public store!: Structure[];

  sample = ["id","user","name", "email", "password", "cpassword", "blood", "salary", "age", "street","delete"];




  display() {
    this.ds.info().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }

    )
  }

  delete(index:any)
  {
    this.ds.delete(index).subscribe(
      data=>{
        console.log(data);
        this.display();
      }
    )
  }

  ngOnInit(): void {
    this.display();
  }

  ngAfterViewInit():void {

  }

}

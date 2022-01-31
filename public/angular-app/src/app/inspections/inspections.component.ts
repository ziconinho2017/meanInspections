import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
export class Inspection{
  _id !: string;
  id !: string;
  business_name !: string;
  date !: Date;
  result !: string;
  address !: Address;
}
export class Address{
  city !: string;
  zip !: number;
  street !: string;
  number !: number;
}
@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {
  inspections !: Inspection[];
  constructor(private getData : ApiService) { }

  ngOnInit(): void {
    this.getData.getInspections()
    .then(resolve => this.setInspection(resolve))
    .catch(this.showError)
  }
  private setInspection(inspections : Inspection[]){
    console.log("Fetched List of Inspections");
    this.inspections = inspections;
  }
  private showError(){
    alert("Error Occured");
  }
  private showSuccess(){
    alert("Deleted Successfully");
    setTimeout(()=>window.location.reload(),1000);
  }
  public deleteInspection(insId : string){
    this.getData.deleteInspection(insId)
    .then(this.showSuccess)
    .catch(this.showError)
  }
}

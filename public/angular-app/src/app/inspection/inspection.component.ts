import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Inspection } from '../inspections/inspections.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
  inspection !: Inspection;
  constructor(private getData : ApiService, private actRoute : ActivatedRoute, private r : Router) { }
  ngOnInit(): void {
    let insId = this.actRoute.snapshot.params['insId'];
    this.getData.getInspection(insId)
    .then(resolve=>this.setInspection(resolve))
    .catch(this.showError);
  }
  private setInspection(inspection : Inspection){
    this.inspection = inspection;
  }
  private showError(){
    alert("Error Occured");
  }
  private showSuccess(){
    alert("Inspetion Deleted Successfully");
    setTimeout(()=>{
      this.r.navigate(['inspections']);
    },1000)
  }
  public deleteInspection(insId:string){
    this.getData.deleteInspection(insId)
    .then(this.showSuccess)
    .catch(this.showError)
  }
}

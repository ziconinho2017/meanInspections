import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Inspection } from '../inspections/inspections.component';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
  inspection !: Inspection;
  constructor(private getData : ApiService, private actRoute : ActivatedRoute) { }
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
    console.log("Error Occured");
  }
}

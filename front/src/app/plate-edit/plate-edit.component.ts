import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatesService } from '../plates.service';

@Component({
  selector: 'app-plate-edit',
  templateUrl: './plate-edit.component.html',
  styleUrls: ['./plate-edit.component.scss']
})
export class PlateEditComponent implements OnInit {

  plateForm: FormGroup;
  plate: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private ps: PlatesService, private fb: FormBuilder) 
  {
    this.createForm();
   }

   createForm() {
    this.plateForm = this.fb.group({
      plateName: ['', Validators.required ],
      plateSurname: ['', Validators.required ],
      platePlates: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editPlates(params['id']).subscribe(res => {
          this.plate = res;
      });
    });
  }

  updatePlates(plateName, plateSurname, platePlates, id) {
    this.route.params.subscribe(params => {
      this.ps.updatePlates(plateName, plateSurname, platePlates, params.id);
      this.router.navigate(['plates']);
    });
}
}
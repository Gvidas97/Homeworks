import { Component, OnInit } from '@angular/core';
import { PlatesService } from '../plates.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-plate-add',
  templateUrl: './plate-add.component.html',
  styleUrls: ['./plate-add.component.scss']
})
export class PlateAddComponent implements OnInit {

  plateForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PlatesService) {
    this.createForm();
  }

  createForm() {
    this.plateForm = this.fb.group({
      plateName: ['', Validators.required ],
      plateSurname: ['', Validators.required ],
      platePlates: ['', Validators.required ]
    });
  }

  addPlate(plateName, plateSurname, platePlates) {
    this.ps.addPlate(plateName, plateSurname, platePlates);
  }
  ngOnInit() {
  }

}

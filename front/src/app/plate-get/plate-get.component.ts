import { Component, OnInit } from '@angular/core';
import Plate from '../Plate';
import { PlatesService } from '../plates.service';

@Component({
  selector: 'app-plate-get',
  templateUrl: './plate-get.component.html',
  styleUrls: ['./plate-get.component.scss']
})
export class PlateGetComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;
  plates: Plate[];
  constructor(private ps: PlatesService) { }

  ngOnInit() {
    this.ps
      .getPlates()
      .subscribe((data: Plate[]) => {
        this.plates = data;
    });

    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  deletePlate(id) {
    this.ps.deletePlate(id).subscribe(res => {
      this.plates.splice(id, 1);
    });
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

}


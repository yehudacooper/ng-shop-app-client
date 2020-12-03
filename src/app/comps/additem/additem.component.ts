import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  addItemForm: FormGroup = new FormGroup({
    sort: new FormControl('', [Validators.required, Validators.minLength(2)]),
    height: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl('', [Validators.required, Validators.minLength(2)]),
    imgSrc: new FormControl('', [Validators.required, Validators.minLength(4)]),
    bigImgSrc: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    material: new FormControl('', [Validators.required, Validators.minLength(4)]),

  })

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  onSubmit(item: any) {
    item.userId = null;
    item.qnty = null;
    this.itemsService.addItem(item);
  }

}

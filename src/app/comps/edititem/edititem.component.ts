import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { CartService } from '../../services/cart.service';
import { SingleItem } from '../../models/singleitem';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  itemId: string;
  singleItem: SingleItem = new SingleItem();

  addItemForm: FormGroup = new FormGroup({
    sort: new FormControl('', [Validators.required, Validators.minLength(2)]),
    height: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl('', [Validators.required, Validators.minLength(2)]),
    imgSrc: new FormControl('', [Validators.required, Validators.minLength(4)]),
    bigImgSrc: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    material: new FormControl('', [Validators.required, Validators.minLength(4)]),

  })


  constructor(private myActivatedRoute: ActivatedRoute, private myItemService: ItemsService,
    private myCartService: CartService) { }

  ngOnInit(): void {

    this.myActivatedRoute.paramMap.subscribe(params => {
      this.itemId = params.get("id");
      this.singleItem = this.myItemService.itemsList.filter(item => item.id == params.get("id"))[0];

    })

  }


  onSubmit(item: any, id: string) {
    this.myItemService.editItem(item, id);
  }
}

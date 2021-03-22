import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-tips',
  templateUrl: './modal-tips.component.html',
  styleUrls: ['./modal-tips.component.scss']
})
export class ModalTipsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { event: string }
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as global from '../../globalConfig';

@Component({
  selector: 'app-level-steps-header',
  templateUrl: './level-steps-header.component.html',
  styleUrls: ['./level-steps-header.component.scss']
})
export class LevelStepsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/app.state';
import { getMakes, getModels, getTrim, getYears } from 'src/app/store/tires';
import { StoresApiActions } from 'src/app/store/tires/actions';

@Component({
  selector: 'app-tire',
  templateUrl: './tire.component.html',
  styleUrls: ['./tire.component.scss']
})
export class TireComponent implements OnInit {

  yearsObj: any;
  makesObj: any;
  modelsObj: any;
  trimObj: any;

  isLoading: boolean;

  constructor(
    private store: Store<State>) { }

  ngOnInit(): void {
  }

  getYears() {
    this.store.select(getYears).subscribe(x => {
      if (!!x) {
        this.isLoading = false;
        this.yearsObj = x
        console.log(x)
      }
    });
    this.isLoading = true;
    this.store.dispatch(StoresApiActions.loadYears())
  }

  getMakes(year) {
    this.store.select(getMakes).subscribe(x => {
      if (!!x) {
        this.isLoading = false;
        this.makesObj = x;
      }
    });
    this.isLoading = true;
    this.store.dispatch(StoresApiActions.loadMakes({year}))
  }

  getModels(make) {
    this.store.select(getModels).subscribe(x => {
      if (!!x) {
        this.isLoading = false;
        this.modelsObj = x
      }
    });
    this.isLoading = true;
    this.store.dispatch(StoresApiActions.loadModels({make}))
  }

  getTrim(model) {
    this.store.select(getTrim).subscribe(x => {
      if (!!x) {
        this.isLoading = false;
        this.trimObj = x
      }
    });
    this.isLoading = true;
    this.store.dispatch(StoresApiActions.loadTrim({model}))
  }
}

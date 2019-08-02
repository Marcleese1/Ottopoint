import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule
} from "@angular/material";

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  ChartsModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}

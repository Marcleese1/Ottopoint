import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./Charts/charts.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatMenuModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, BarChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    ChartsModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

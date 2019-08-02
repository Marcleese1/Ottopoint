import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarChartComponent } from "./Charts/charts.component";

const routes: Routes = [{ path: "**", component: BarChartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

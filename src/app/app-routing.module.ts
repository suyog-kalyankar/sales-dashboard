import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "redirect/dashboard"
      },
      {
        path: "dashboard/today",
        component: DashboardComponent
      },
      {
        path: "dashboard/lastweek",
        component: DashboardComponent
      },
      {
        path: "dashboard/lastmonth",
        component: DashboardComponent
      },
      {
        path: "dashboard/thisquarter",
        component: DashboardComponent
      },
      {
        path: "dashboard/thisyear",
        component: DashboardComponent
      },
      {
        path: "dashboard/today",
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

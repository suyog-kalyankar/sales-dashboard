import { SalesDataService } from "./../../services/sales-data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sales-details",
  templateUrl: "./sales-details.component.html",
  styleUrls: ["./sales-details.component.scss"]
})
export class SalesDetailsComponent implements OnInit {
  saledDataSource: any;
  displayedColumns = [
    "Sales Rep",
    "Date",
    "Client",
    "Primary Contact Person",
    "Title",
    "Vertical",
    "Meeting Location",
    "Purpose Of Interaction",
    "Outcome And Remarks",
    "Engagement Status"
  ];
  constructor(private salesDataService: SalesDataService) {}

  ngOnInit() {
    this.getSaleData();
  }

  getSaleData() {
    this.salesDataService.fetchSalesData().subscribe(res => {
      this.saledDataSource = res;
    });
  }
}

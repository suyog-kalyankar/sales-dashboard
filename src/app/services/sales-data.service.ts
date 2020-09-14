import { SalesData } from './../models/sales-data';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class SalesDataService {
    constructor(){}

    mockSalesTableData: SalesData[] = [
{"salesRep":"John Doe","date":"July 20th, 2018","client":"Oberio Group of Hotels","primaryContactPerson":"Mahmud Ritelli","title":"C level","vertical":"Marketing","meetingLocation":"Goto meeting","purposeOfInteraction":"Understand their current ecosystem","outcomeAndRemarks":"Send first cut of proposed solution.","engagementStatus":"Needs defined"},
{"salesRep":"Ethan Hunt","date":"July 20th, 2018","client":"Taj Group of Hotels","primaryContactPerson":"Avie Peasegood","title":"C level","vertical":"Sales","meetingLocation":"Video","purposeOfInteraction":"Dwmo the product","outcomeAndRemarks":"She will get back with availability for next meeting.","engagementStatus":"Contact made"},
{"salesRep":"Jane Doe","date":"July 20th, 2018","client":"Accenture","primaryContactPerson":"Dew Tilbey","title":"C level","vertical":"Senior Management","meetingLocation":"Face to face","purposeOfInteraction":"Negotiations","outcomeAndRemarks":"He needs to get the final approval by the board. Will happen by today EOD.","engagementStatus":"Negotiations started"},
{"salesRep":"Julia Cruise","date":"July 20th, 2018","client":"Google","primaryContactPerson":"Jerri Casswell","title":"Sr Manager Level","vertical":"Technology","meetingLocation":"Call","purposeOfInteraction":"Introductory call","outcomeAndRemarks":"Need to send them a reminder tomorrow to fix meeting with the Sales Head.","engagementStatus":"Contact made"},
{"salesRep":"Tom Roberts","date":"July 20th, 2018","client":"Microsoft","primaryContactPerson":"Dannye Halms","title":"VP Level","vertical":"Senior Management","meetingLocation":"Email","purposeOfInteraction":"Confirm final meeting with CEO for pricing negotiation.","outcomeAndRemarks":"Meeting confirmed for tomorrow.","engagementStatus":"Negotiations started"},
{"salesRep":"John Doe","date":"July 21st, 2018","client":"Oberio Group of Hotels","primaryContactPerson":"Mahmud Ritelli","title":"C level","vertical":"Marketing","meetingLocation":"Face to face","purposeOfInteraction":"Propose our solution","outcomeAndRemarks":"Send them an updated proposal based on their feedback by next week.","engagementStatus":"Needs defined"},
{"salesRep":"Ethan Hunt","date":"July 21st, 2018","client":"Taj Group of Hotels","primaryContactPerson":"Avie Peasegood","title":"C level","vertical":"Sales","meetingLocation":"Call","purposeOfInteraction":"Fix up next meeting","outcomeAndRemarks":"She has to fly out of country urgently. Will get back availability with once back.","engagementStatus":"Contact made"},
{"salesRep":"Jane Doe","date":"July 21st, 2018","client":"Accenture","primaryContactPerson":"Dew Tilbey","title":"C level","vertical":"Senior Management","meetingLocation":"Face to face","purposeOfInteraction":"Deal signing ","outcomeAndRemarks":"Deal closed","engagementStatus":"Won"},
{"salesRep":"Julia Cruise","date":"July 21st, 2018","client":"Google","primaryContactPerson":"Jerri Casswell","title":"Sr Manager Level","vertical":"Technology","meetingLocation":"Text","purposeOfInteraction":"Fix up next meeting with Sales Head","outcomeAndRemarks":"Scheduled for next week","engagementStatus":"Contact made"},
{"salesRep":"Tom Robers","date":"July 21st, 2018","client":"Microsoft","primaryContactPerson":"Dannye Halms","title":"VP Level","vertical":"Senior Management","meetingLocation":"Face to face","purposeOfInteraction":"Finalize negotiation","outcomeAndRemarks":"Deal lost","engagementStatus":"Lost"}]


    fetchSalesData(): Observable<any>{
        return of(this.mockSalesTableData);
    }
}
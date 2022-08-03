import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-text',
    templateUrl: 'app-text.component.html',
    styleUrls: ['app-text.component.css']
})
export class AppText {
    @Input() public title: string | undefined;
    @Input() public comment: string | undefined;
    

}
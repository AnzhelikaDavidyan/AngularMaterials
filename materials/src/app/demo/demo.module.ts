import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { DemoComponent } from "./demo.component";

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        ComponentsModule
    ],
    exports: [
        DemoComponent
    ],
    providers: [],
})
export class DemoModule {

}
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

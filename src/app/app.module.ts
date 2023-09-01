import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from'@angular/common/http'
import { NewsapiService } from "./service/newsapi.service";
import { FooterComponent } from './footer/footer.component';
import { TechnewsComponent } from './technews/technews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    NavbarComponent,
    FooterComponent,
    TechnewsComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

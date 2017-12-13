import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from 'app/news/news.service';
import { HttpModule } from '@angular/http';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    DxDataGridModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

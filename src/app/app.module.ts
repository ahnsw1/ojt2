import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { DisplayComponent } from './component/main/display/display.component';
import { MapComponent } from './component/main/map/map.component';
import { DetectComponent } from './component/main/detect/detect.component';
import { EcgComponent } from './component/main/display/ecg/ecg.component';
import { RespComponent } from './component/main/display/resp/resp.component';
import { StateComponent } from './component/main/display/state/state.component';
import { TrendComponent } from './component/main/display/trend/trend.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DisplayComponent,
    MapComponent,
    DetectComponent,
    EcgComponent,
    RespComponent,
    StateComponent,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { DisplayComponent } from './component/main/display/display.component';
import { MapComponent } from './component/main/map/map.component';
import { DetectComponent } from './component/main/detect/detect.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth/auth.service';
import { WaveFormComponent } from './component/main/display/wave-form/wave-form.component';
import { StaticFormComponent } from './component/main/display/static-form/static-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DisplayComponent,
    MapComponent,
    DetectComponent,
    WaveFormComponent,
    StaticFormComponent
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

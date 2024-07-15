import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ToastTestComponent } from './toast-test/toast-test.component';
import { TestToastContainerComponent } from './test-toast-container/test-toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToastTestComponent,
    TestToastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    AuthModule,
    SharedModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

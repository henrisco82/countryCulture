import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { LocalNumberPipe } from './pipes/local-number.pipe';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalDatePipe,
    LocalNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [SessionService],
      useFactory: (sessionService: { locale: string }) => sessionService.locale
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

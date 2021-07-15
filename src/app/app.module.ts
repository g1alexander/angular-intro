import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountModule } from './counts/count.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CountModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

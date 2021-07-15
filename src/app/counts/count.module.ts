import { NgModule } from '@angular/core';
import { CountComponent } from './counts/count.component';

@NgModule({
  declarations: [CountComponent],
  exports: [CountComponent],
})
export class CountModule {}

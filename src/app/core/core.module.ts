import { NgModule, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SilderbarComponent } from './silderbar/silderbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent, 
    SilderbarComponent
 ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    SilderbarComponent
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent){
        throw new Error ('模块已经存在，不能再次加载!')
    }
  }
}

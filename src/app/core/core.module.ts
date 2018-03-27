import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // icon svg 相关
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SilderbarComponent } from './silderbar/silderbar.component';
import { SharedModule } from '../shared/shared.module';
import { loadSvgResources } from '../utils/svg.utils';
@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
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
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载!')
    }
    loadSvgResources(ir, ds)
  }
}

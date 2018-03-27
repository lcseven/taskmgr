import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon(
        'gifts',
        ds.bypassSecurityTrustResourceUrl('assets/52gifts.svg'));
  }
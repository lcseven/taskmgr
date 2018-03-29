import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const iconSvg = 'assets/icon';
    const sildSvg = `${iconSvg}/silde`
    ir.addSvgIcon(
        'gifts',
        ds.bypassSecurityTrustResourceUrl('assets/52gifts.svg')

    );
    ir.addSvgIcon(
        'project',
        ds.bypassSecurityTrustResourceUrl(`${sildSvg}/project.svg`)
    );
    ir.addSvgIcon(
        'month',
        ds.bypassSecurityTrustResourceUrl(`${sildSvg}/month.svg`)
    );
    ir.addSvgIcon(
        'day',
        ds.bypassSecurityTrustResourceUrl(`${sildSvg}/day.svg`)
    );
    ir.addSvgIcon(
        'week',
        ds.bypassSecurityTrustResourceUrl(`${sildSvg}/week.svg`)
    );

}
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const iconSvg = 'assets/icon';
    const sildSvg = `${iconSvg}/silde`
    const daysSvg = `${iconSvg}/days`
    const avatarSvg = `${iconSvg}/avatar`
    const menuSvg = `${iconSvg}/menu`
    ir.addSvgIcon(
        'gifts',
        ds.bypassSecurityTrustResourceUrl('assets/52gifts.svg')

    );
    ir.addSvgIcon(
        'move',
        ds.bypassSecurityTrustResourceUrl(`${menuSvg}/move.svg`)

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
    const days = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    days.forEach(d => ir.addSvgIcon(
        `day${d}`,
        ds.bypassSecurityTrustResourceUrl(`${daysSvg}/${d}.svg`)
    ))
    const avatars = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
    avatars.forEach(d => ir.addSvgIcon(
        `avatar${d}`,
        ds.bypassSecurityTrustResourceUrl(`${avatarSvg}/avatar${d}.svg`)
    ))
}
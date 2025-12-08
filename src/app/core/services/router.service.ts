import { isPlatformBrowser, Location } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export type ShareResult = 'shared' | 'copied' | 'cancelled' | 'failed' | 'not-available';
@Injectable({
    providedIn: 'root'
})
export class RouterService {
    constructor(private router: Router, private location: Location, private toastr: ToastrService, @Inject(PLATFORM_ID) private platformId: Object) { }

    loginRedirect(): void {
        this.router.navigate(['/start/login']);
    }

    routerBack(): void {
        if (window.history.length > 1) {
            this.location.back();
        } else {
            this.router.navigate(['/']);
        }
    }

    async share(route?: string): Promise<void> {
        if (!isPlatformBrowser(this.platformId)) {
            this.toastr.error('Compartilhamento não disponível no servidor.');
            return
        }

        const url = this.toAbsoluteUrl(route);

        if (navigator.share) {
            await navigator.share({ url });
        } else if (navigator.clipboard && navigator.clipboard.writeText) {

            await navigator.clipboard.writeText(url);
            this.toastr.info('Link copiado para a área de transferência.');

        } else if (this.copyWithTemporaryInput(url)) {
            this.toastr.info('Link copiado para a área de transferência.');
        } else {
            this.toastr.error('Não foi possível compartilhar ou copiar o link.');
        };
    }

    toAbsoluteUrl(route?: string): string {
        if (typeof window === 'undefined') return '';

        if (!route) {
            return window.location.href;
        }

        const absoluteRegex = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;
        if (absoluteRegex.test(route)) {
            return route;
        }

        const path = route.startsWith('/') ? route : `/${route}`;
        return `${window.location.origin}${path}`;
    }

    private copyWithTemporaryInput(text: string): boolean {
        try {
            const ta = document.createElement('textarea');
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            ta.style.top = '0';
            ta.setAttribute('aria-hidden', 'true');
            ta.value = text;
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            ta.setSelectionRange(0, ta.value.length);
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            return !!ok;
        } catch {
            return false;
        }
    }
}

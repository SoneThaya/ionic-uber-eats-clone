import { INTRO_KEY } from './../auth-screens/intro/intro.page';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanLoad {
  constructor(private router: Router, private storage: StorageService) {}

  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await this.storage.getStorage(INTRO_KEY);

    if (hasSeenIntro && hasSeenIntro.value == 'true') {
      return true;
    } else {
      this.router.navigateByUrl('/intro', { replaceUrl: true });
      return true;
    }
  }
}

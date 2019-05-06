import { Component } from '@angular/core';
// import { AppTranslationService } from '@custor/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from '@custor/services/translation-loader.service';
import {ConfigurationService} from '@custor/services/configuration.service';

import { locale as langEnglish } from './lang/en';
import { locale as langEthiopic } from './lang/et';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otrls';
  constructor(private translationService: TranslateService,  private translationLoaderService: TranslationLoaderService,
              private configService: ConfigurationService) {

      this.translationService.addLangs(['en', 'et']);
      this.translationService.setDefaultLang('et');
      this.translationLoaderService.loadTranslations(langEnglish, langEthiopic);
      // Use a language
      this.translationService.use('et');
      this.configService.language = 'et';  // put the selection in config

      // ??
      setTimeout(() => {
        this.translationService.setDefaultLang('en');
        this.translationService.setDefaultLang('et');
      });
  }
}

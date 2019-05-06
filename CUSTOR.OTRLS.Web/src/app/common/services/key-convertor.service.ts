import {Injectable} from '@angular/core';
import {ConfigurationService} from '@custor/services/configuration.service';
import { GENDERS} from 'app/common/constants/consts';


@Injectable()
export class KeyConverstorService  {
  constructor(private config: ConfigurationService) {
   }

   getGender(val: any) {
    const result = GENDERS.filter(item => item.Id.toString() === val.toString());
    if (result.length > 0) {
        if (this.config.language === 'et') {
                return result[0].Description;
        } else  if (this.config.language === 'en') {
                return result[0].DescriptionEnglish;
        }
    }
    return '';
    }

    // add methods for other constants
}

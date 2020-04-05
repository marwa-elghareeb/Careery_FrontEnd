import { Component, OnInit , Input, OnChanges } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnChanges {

  @Input('footerSettings')footerSettings = null;
  pageNameList :any = [];
  copyWriteDate: any = new Date().toISOString(); //get copy right date

  allLanguage : any[]; // to assign all language data
  activeLang : string = ''; // to assign active language

  constructor(private cService:CommonService, translate: TranslateService) { 

    this.cService.activelang.subscribe((lang)=>{
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });
    this.copyWriteDate = new Date().toISOString();

  }

  ngOnInit(): void {
    this.activeLang = localStorage.getItem("_lang");
    this.getlanguage();
  }

  /* Function Name : ngOnInit
  * Author : 
  * Created Date : 10-02-2019 
  * Modified Date : *
  * Purpose : to get all language data
  * PARAMS :  
  */
 getlanguage()
 {
   // get all language
   this.cService.getLanguages().subscribe((response:any)=>{
    if((response['statustext'] === 'success')){
        
       this.allLanguage = response['data'];
      
     } else {
       console.log('error');
     }
     
   });

 }

 /* Function Name : langChange
  * Author : 
  * Created Date : 10-02-2019 
  * Modified Date : *
  * Purpose : to change active language
  * PARAMS :  value
  */
 langChange(value)
 {
   localStorage.setItem("_lang", value);
   window.location.reload();

 }

 
 ngOnChanges() {
  if (this.footerSettings && this.footerSettings.page) {
    let lang = localStorage.getItem('_lang');
    this.pageNameList = this.footerSettings.page.map((item)=>{
      return {
        name : item.details.find((details)=>{
          return details.lang_code == lang;
        }).page_title,
        slug: item.page_slug,
      }
    });
  }
}


}

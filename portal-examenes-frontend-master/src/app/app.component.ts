import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
  
  }
  ngOnInit() {
    // Establecer idioma predeterminado al cargar la página
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
import { Component } from '@angular/core';
import { SECTIONHOMEPAGE, SectionHomepage } from 'src/app/mocks/sections-homepage.mocks';


@Component({
  selector: 'app-section-homepage',
  templateUrl: './section-homepage.component.html',
  styleUrls: ['./section-homepage.component.css']
})
export class SectionHomepageComponent {
  sections: SectionHomepage[] = SECTIONHOMEPAGE;
}

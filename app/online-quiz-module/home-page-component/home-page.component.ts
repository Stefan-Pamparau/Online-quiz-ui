import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'home-page',
  templateUrl: `home-page.component.html`,
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent {
  name = 'Online quiz';
}

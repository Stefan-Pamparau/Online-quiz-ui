import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'nobody-logged-in-error',
  templateUrl: `nobody-logged-in-error.component.html`,
  styleUrls: ['nobody-logged-in-error.component.css']
})
export class NobodyLoggedInErrorComponent {

  constructor(private location: Location, private router: Router) {
  }

  goBack(): void {
    this.location.back();
  }
}

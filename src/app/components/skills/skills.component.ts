import { Component } from '@angular/core';

import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  faStar = faStar;

}

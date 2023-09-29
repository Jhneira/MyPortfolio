import { Component } from '@angular/core';

import {faInstagram, faGithub,} from '@fortawesome/free-brands-svg-icons';
import {faArrowRight,} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  backFace: boolean = false;

  instagram = faInstagram;
  github = faGithub;
  faArrowRight = faArrowRight

  flip () {
    this.backFace = !this.backFace;
  }

}

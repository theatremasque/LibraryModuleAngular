import { Component } from '@angular/core';
import { PublicationService } from "../services/publication.service";
import {Publication} from "../interfaces/publication";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  publications: Publication[];

  constructor(private service: PublicationService) {
    this.publications = this.service.publications;
  }
}

import {Component, Input} from '@angular/core';
import { Publication } from "../interfaces/publication";

@Component({
  selector: 'tr[app-query-publication]',
  templateUrl: './query-publication.component.html',
  styleUrl: './query-publication.component.css'
})
export class QueryPublicationComponent {
  @Input() publication: Publication;

  constructor() {
    this.publication = {}
  }
}

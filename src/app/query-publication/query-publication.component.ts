import {Component, Input} from '@angular/core';
import { Publication } from "../interfaces/publication";

@Component({
  selector: 'tr[app-query-publication]',
  templateUrl: './query-publication.component.html',
  styleUrl: './query-publication.component.css'
})
export class QueryPublicationComponent {
  @Input() publication: Publication | null
  mappedArray?: string;

  constructor() {
    this.publication = null;
    this.mappedArray = ''
  }
  ngOnInit(){
    console.log(this.publication)
    this.mappedArray = this.publication?.comments?.map(c => c.content)
      .join(', ');
  }
}

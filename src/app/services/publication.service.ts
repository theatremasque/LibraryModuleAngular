import { Injectable } from '@angular/core';
import { Publication } from "../interfaces/publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  publications : Publication[];
  constructor() {
    this.publications = [
      {
        typeTitle: 'article',
        id: 1,
        title: 'title',
        description: 'description..',
        year: 2024,
        pages: 1.5,
        link: 'https://',
        isWos: true,
        isScopus: true,
        isCopernicus: false,
        isApproved: false,
        comments: [
          { id:1, content: 'some text...' },
          { id:2, content: 'some text...' },
          { id:3, content: 'some text...' },
          { id:4, content: 'some text...' }
        ]
      }
    ]
  }
}

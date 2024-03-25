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
        typeTitle: 'Стаття',
        id: 1,
        title: 'Розробка хатинок для степових їжаків',
        description: 'Актуалізація та терміновість хатинок(хат для їжів)...',
        year: 2024,
        pages: 1.5,
        link: 'https://cpad.ask.fm/197/104/126/-349996972-1skc9ap-cg5dmeker16fehf/original/3oVvt6NKd41.jpg',
        isWos: true,
        isScopus: true,
        isCopernicus: false,
        isApproved: false,
        comments: [
          { id:1, content: 'Чому льоша не допоміг їжам?' },
          { id:2, content: 'Дуже мало сторінок, треба більше!' },
        ]
      }
    ]
  }
}

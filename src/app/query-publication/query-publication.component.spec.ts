import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPublicationComponent } from './query-publication.component';

describe('QueryPublicationComponent', () => {
  let component: QueryPublicationComponent;
  let fixture: ComponentFixture<QueryPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

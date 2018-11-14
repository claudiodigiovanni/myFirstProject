import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentiPostComponent } from './commenti-post.component';

describe('CommentiPostComponent', () => {
  let component: CommentiPostComponent;
  let fixture: ComponentFixture<CommentiPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentiPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

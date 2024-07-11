import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleBlogComponent } from './view-single-blog.component';

describe('ViewSingleBlogComponent', () => {
  let component: ViewSingleBlogComponent;
  let fixture: ComponentFixture<ViewSingleBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleBlogComponent]
    });
    fixture = TestBed.createComponent(ViewSingleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

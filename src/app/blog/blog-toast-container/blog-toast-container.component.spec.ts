import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogToastContainerComponent } from './blog-toast-container.component';

describe('BlogToastContainerComponent', () => {
  let component: BlogToastContainerComponent;
  let fixture: ComponentFixture<BlogToastContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogToastContainerComponent]
    });
    fixture = TestBed.createComponent(BlogToastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

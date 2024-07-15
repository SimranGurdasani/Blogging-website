import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToastContainerComponent } from './test-toast-container.component';

describe('TestToastContainerComponent', () => {
  let component: TestToastContainerComponent;
  let fixture: ComponentFixture<TestToastContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestToastContainerComponent]
    });
    fixture = TestBed.createComponent(TestToastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

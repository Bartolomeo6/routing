import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdrowieComponent } from './zdrowie.component';

describe('ZdrowieComponent', () => {
  let component: ZdrowieComponent;
  let fixture: ComponentFixture<ZdrowieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZdrowieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdrowieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

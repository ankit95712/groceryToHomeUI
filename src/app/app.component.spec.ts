import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'groceryToHome'`, () => {
    expect(app.title).toEqual('groceryToHome');
  });

  it(`should set show home to true`, () => {
    expect(app.showHome).toBeFalse();
    app.showHomePage();
    expect(app.showHome).toBeTrue();
  });
});

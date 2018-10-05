import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGitHubUrlExampleComponent } from './http-git-hub-url-example.component';

describe('HttpGitHubUrlExampleComponent', () => {
  let component: HttpGitHubUrlExampleComponent;
  let fixture: ComponentFixture<HttpGitHubUrlExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGitHubUrlExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGitHubUrlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

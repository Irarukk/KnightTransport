import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUsuarioPage } from './c-usuario.page';

describe('CUsuarioPage', () => {
  let component: CUsuarioPage;
  let fixture: ComponentFixture<CUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

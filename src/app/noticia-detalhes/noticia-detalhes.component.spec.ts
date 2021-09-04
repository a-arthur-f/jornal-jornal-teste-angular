import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetalhesComponent } from './noticia-detalhes.component';

describe('NoticiaDetalhesComponent', () => {
  let component: NoticiaDetalhesComponent;
  let fixture: ComponentFixture<NoticiaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

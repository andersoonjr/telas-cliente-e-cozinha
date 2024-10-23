import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoProdutoComponent } from './catalogo-produto.component';

describe('CatalogoProdutoComponent', () => {
  let component: CatalogoProdutoComponent;
  let fixture: ComponentFixture<CatalogoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

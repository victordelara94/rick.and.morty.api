import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreService } from '../../services/store.service';
import HomeComponent from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoreService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(StoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Then, should call loadAllCharacters on initialization', () => {
    spyOn(store, 'loadAllCharacters').and.callThrough();
    component.ngOnInit();
    expect(store.loadAllCharacters).toHaveBeenCalled();
  });
  it('Then, should call setPage,getFilter and loadAllCharacters on SelectPage', () => {
    spyOn(store, 'setPage').and.callThrough();
    spyOn(store, 'getFilter').and.callThrough();
    spyOn(store, 'loadAllCharacters').and.callThrough();
    component.selectPage(1);

    expect(store.setPage).toHaveBeenCalled();
    expect(store.getFilter).toHaveBeenCalled();
    expect(store.loadAllCharacters).toHaveBeenCalled();
  });
  it('Then, should call setPage,getFilter and loadFilterCharacters on SelectPage', () => {
    spyOn(store, 'setPage').and.callThrough();
    store.setFilterActive('name', 'rick');
    spyOn(store, 'getFilter').and.callThrough();
    spyOn(store, 'loadFilterCharacters').and.callThrough();
    component.selectPage(1);

    expect(store.setPage).toHaveBeenCalled();
    expect(store.getFilter).toHaveBeenCalled();
    expect(store.loadFilterCharacters).toHaveBeenCalled();
  });
});

import {} from '@angular/common/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.character = {
      id: 1,
      created: 'a',
      episode: ['a'],
      gender: 'a',
      image: 'a',
      location: { name: 'a', url: 'a' },
      name: 'a',
      origin: { name: 'a', url: 'a' },
      species: 'a',
      status: 'a',
      type: 'a',
      url: 'a',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

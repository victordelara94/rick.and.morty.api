import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepositoryService],
    });

    service = TestBed.inject(RepositoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get results from the API', () => {
    service.getAll().subscribe(() => {});

    const req = httpTestingController.expectOne(
      'https://rickandmortyapi.com/api/character'
    );
    expect(req.request.method).toBe('GET');

    req.flush({});
  });
});

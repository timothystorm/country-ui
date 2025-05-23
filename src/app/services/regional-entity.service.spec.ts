import {RegionalEntityService} from './regional-entity.service';
import {createHttpFactory, HttpMethod, SpectatorHttp} from '@ngneat/spectator';
import {RegionalEntity} from '../models/regional-entity';
import {environment} from '../../environments/environment';

describe('RegionalEntityService', () => {
  let spectator: SpectatorHttp<RegionalEntityService>;
  const createHttp = createHttpFactory(RegionalEntityService);

  beforeEach(() => spectator = createHttp());

  it('should create', () => expect(spectator.service).toBeDefined());

  it('should GET regional entities', () => {
    spectator.service.readRegionalEntities().subscribe();
    spectator.expectOne(environment.apiUrl, HttpMethod.GET);
  });

  it('should POST regional entity', () => {
    const re: RegionalEntity = {
      name: 'abc',
      capital: 'xyz',
      altitudeLo: 100,
      altitudeHi: 200,
      area: 1000,
      population: 10
    };

    spectator.service.saveRegionalEntity(re).subscribe();
    const req = spectator.expectOne(environment.apiUrl, HttpMethod.POST);
    expect(req.request.body).toEqual(re);
  });

  it('should DELETE regional entity', () => {
    const id = 100;
    spectator.service.deleteRegionalEntity(100).subscribe();
    spectator.expectOne(`${environment.apiUrl}/${id}`, HttpMethod.DELETE);
  });
});

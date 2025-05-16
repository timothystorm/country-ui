import {RegionalEntityService} from './regional-entity.service';
import {createHttpFactory, HttpMethod, SpectatorHttp} from '@ngneat/spectator';
import {RegionalEntity} from '../models/regional-entity';

describe('RegionalEntityService', () => {
  let spectator: SpectatorHttp<RegionalEntityService>;
  const createHttp = createHttpFactory(RegionalEntityService);

  beforeEach(() => spectator = createHttp());

  it('should create', () => expect(spectator.service).toBeDefined());

  it('should GET regional entities', () => {
    spectator.service.readRegionalEntities().subscribe();
    spectator.expectOne('/api/regionalentities', HttpMethod.GET);
  });

  it('should POST regional entity', () => {
    const re: RegionalEntity = {
      name: 'abc',
      capital: 'xyz',
      loAltitude: 100,
      hiAltitude: 200,
      squareKilometers: 1000,
      population: 10
    };

    spectator.service.saveRegionalEntity(re).subscribe();
    const req = spectator.expectOne('/api/regionalentities', HttpMethod.POST);
    expect(req.request.body).toEqual(re);
  });

  it('should DELETE regional entity', () => {
    const id = 100;
    spectator.service.deleteRegionalEntity(100).subscribe();
    spectator.expectOne(`/api/regionalentities/${id}`, HttpMethod.DELETE);
  });
});

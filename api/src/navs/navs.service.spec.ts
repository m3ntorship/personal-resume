import { Test, TestingModule } from '@nestjs/testing';
import { NavsService } from './navs.service';

describe('NavsService', () => {
  let service: NavsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavsService],
    }).compile();

    service = module.get<NavsService>(NavsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

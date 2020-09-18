import { Test, TestingModule } from '@nestjs/testing';
import { NavsController } from './navs.controller';

describe('NavsController', () => {
  let controller: NavsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavsController],
    }).compile();

    controller = module.get<NavsController>(NavsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

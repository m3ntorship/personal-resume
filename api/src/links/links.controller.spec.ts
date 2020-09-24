import { Test, TestingModule } from '@nestjs/testing';
import { NavigationController } from './links.controller';

describe('NavigationController', () => {
  let controller: NavigationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavigationController],
    }).compile();

    controller = module.get<NavigationController>(NavigationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UpdpostController } from './updpost.controller';

describe('UpdpostController', () => {
  let controller: UpdpostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdpostController],
    }).compile();

    controller = module.get<UpdpostController>(UpdpostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

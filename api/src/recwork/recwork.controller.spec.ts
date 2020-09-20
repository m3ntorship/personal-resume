import { Test, TestingModule } from '@nestjs/testing';
import { RecworkController } from './recwork.controller';

describe('RecworkController', () => {
  let controller: RecworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecworkController],
    }).compile();

    controller = module.get<RecworkController>(RecworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { jest, it, expect } from '@jest/globals';

// jest.mock('../../services/someService', () => ({
//   __esModule: true,
//   default: jest.fn(),
// }));

// jest.mock('../../services/someService');

jest.unstable_mockModule('../../services/index.js', () => ({
  someService: jest.fn(),
}));

const { modA } = await import('../index.js');
const { someService } = await import('../../services/index.js');

it('should call some service', async () => {
  await modA();
  expect(someService).toBeCalled();
});

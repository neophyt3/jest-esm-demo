import { jest, it, expect } from '@jest/globals';
import { modA } from '../index.js';
import { someService } from '../../services/index.js';

// jest.mock('../../services/someService', () => ({
//   __esModule: true,
//   default: jest.fn(),
// }));

// jest.mock('../../services/someService');

jest.unstable_mockModule('../../services/index.js', () => ({
  someService: jest.fn(),
}));

it('should call some service', async () => {
  await modA();
  expect(someService).toBeCalled();
});

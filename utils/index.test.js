import {formatDate} from './index';

describe('formatDate', () => {
  it('should return formatted date', () => {
    const date = '2021-07-21T08:00:23';
    const expectedDate = '07/21/21';

    expect(formatDate(date)).toBe(expectedDate);
  });
});

import { afterEach, describe, expect, it, vi } from 'vitest';

describe('pstDate test', async () => {
  afterEach(() => {
    vi.resetModules()
    vi.restoreAllMocks()
  });
  
  it('returns the correct date', async () => {
    const mockDate = new Date('2022-01-01T12:00:00Z');
    vi.spyOn(globalThis, 'Date').mockImplementation(() => mockDate);

    const { pstDate } = await import('../../../../src/components/DatePicker/helpers/pstDate');

    expect(pstDate).toEqual(new Date('2022-01-01T12:00:00.000Z'));
  });
});
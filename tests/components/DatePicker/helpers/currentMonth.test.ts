import { afterEach, describe, expect, it, vi } from "vitest";

describe('currentMonth test', async () => {
  afterEach(() => {
    vi.resetModules()
    vi.restoreAllMocks()
  });
  
  it('returns month January', async () => {
    const pstDate = new Date('2022-01-01T12:00:00.000Z');
    vi.spyOn(global, 'Date').mockImplementation(() => pstDate);

    const { currentMonth } = await import('../../../../src/components/DatePicker/helpers/currentMonth');

    expect(currentMonth).toBe('1');
  })

  it('returns month February', async () => {
    const pstDate = new Date('2022-02-01T12:00:00.000Z');
    vi.spyOn(global, 'Date').mockImplementation(() => pstDate);

    const { currentMonth } = await import('../../../../src/components/DatePicker/helpers/currentMonth');

    expect(currentMonth).toBe('2');
  })
})
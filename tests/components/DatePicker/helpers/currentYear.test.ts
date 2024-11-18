import { describe, expect, it, vi, afterEach } from "vitest";

describe('currentYear test', async () => {
  afterEach(() => {
    vi.resetModules()
    vi.restoreAllMocks()
  });

  it('returns year 2022', async () => {
    const pstDate = new Date('2022-01-01T12:00:00.000Z');
    vi.spyOn(global, 'Date').mockImplementation(() => pstDate);

    const { currentYear } = await import('../../../../src/components/DatePicker/helpers/currentYear');
    expect(currentYear).toBe('2022');

  });

  it('returns year 2023', async () => {
    const pstDate = new Date('2023-12-01T12:00:00.000Z');
    vi.spyOn(global, 'Date').mockImplementation(() => pstDate);

    const { currentYear } = await import('../../../../src/components/DatePicker/helpers/currentYear');
    expect(currentYear).toBe('2023');
  });
});

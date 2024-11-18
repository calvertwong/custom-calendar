const pstOffset: number = -8 * 60 * 60 * 1000; // PST is UTC-8
const currentDate: Date = new Date();
export const pstDate: Date = new Date(currentDate.getTime() + pstOffset);
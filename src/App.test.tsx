import {
  formatTimeByDate,
  formatTimeByHours,
  formatCurrency
} from "./shared/utils";

test("format time by date", () => {
  expect(formatTimeByDate("fdsafds")).toBe("00/00/00");
  expect(formatTimeByDate(null)).toBe("00/00/00");
  expect(formatTimeByDate(undefined)).toBe("00/00/00");
  expect(formatTimeByDate({ a: 1234 })).toBe("00/00/00");
  expect(formatTimeByDate(0)).toBe("00/00/00");
});

test("format time by hours", () => {
  expect(formatTimeByHours("fdsafds")).toBe("00:00");
  expect(formatTimeByHours(null)).toBe("00:00");
  expect(formatTimeByHours(undefined)).toBe("00:00");
  expect(formatTimeByHours({ a: 1234 })).toBe("00:00");
});

test("format currency", () => {
  expect(formatCurrency("fadsfadsfd")).toBe("0 ₫");
  expect(formatCurrency(null)).toBe("0 ₫");
  expect(formatCurrency(undefined)).toBe("0 ₫");
  expect(formatCurrency([])).toBe("0 ₫");
  expect(formatCurrency({})).toBe("0 ₫");
  expect(formatCurrency(12321312)).toBe("₫12,321,312");
});

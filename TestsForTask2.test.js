const {
    handshakes,
    handshakes2
} = require('./Task 2');

describe("Fuction handshakes", () => {
    test("returns numbers of handshakes", () => {
        expect(handshakes(10)).toBe(45);
        expect(handshakes(10000)).toBe(49995000);
        expect(handshakes(6)).toBe(15);
    });
    test("works with numbers in string", () => {
        expect(handshakes("10")).toBe(45);
        expect(handshakes("10000")).toBe(49995000);
        expect(handshakes("6")).toBe(15);
    });
    test("returns a string if a non-integer less than or equal to 1 is specified", () => {
        expect(handshakes("-10")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes(1)).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes(5.5)).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
    });
    test("returns a string if not a number was specified", () => {
        expect(handshakes("Привет")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes("5 Hi")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes("")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
    });
    test("returns expected values", () => {
        expect(handshakes(NaN)).toBeTruthy();
        expect(handshakes(null)).not.toBeNull();
        expect(handshakes(undefined)).toBeDefined();
    });
});

describe("Fuction handshakes2", () => {
    test("returns numbers of handshakes", () => {
        expect(handshakes2(10)).toBe(45);
        expect(handshakes2(10000)).toBe(49995000);
        expect(handshakes2(6)).toBe(15);
    });
    test("works with numbers in string", () => {
        expect(handshakes2("10")).toBe(45);
        expect(handshakes2("10000")).toBe(49995000);
        expect(handshakes2("6")).toBe(15);
    });
    test("returns a string if a non-integer less than or equal to 1 is specified", () => {
        expect(handshakes2("-10")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes2(1)).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes2(5.5)).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
    });
    test("returns a string if not a number was specified", () => {
        expect(handshakes2("Привет")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes2("5 Hi")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
        expect(handshakes2("")).toMatch('Для расчета количества рукопожатий количество людей должно равняться целому числу больше единицы');
    });
    test("returns expected values", () => {
        expect(handshakes2(NaN)).toBeTruthy();
        expect(handshakes2(null)).not.toBeNull();
        expect(handshakes2(undefined)).toBeDefined();
    });
});


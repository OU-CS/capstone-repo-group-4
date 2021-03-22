import { validateParameters } from '../../../src/handlers/get-property-by-id';

describe('Test validateParameters', () => {
    test('no parameters specified', () => {
        expect(() => validateParameters(undefined)).toThrow('No query parameters were specified');
    });

    test('no property id', () => {
        const params = {
            wrongParameter: '',
        };
        expect(() => validateParameters(params)).toThrow('No propertyId was specified');
    });

    test('property id found', () => {
        const params = {
            propertyId: '123',
        };
        expect(validateParameters(params)).toStrictEqual(params);
    });
});

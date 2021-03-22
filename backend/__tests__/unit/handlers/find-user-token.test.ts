import { validateParameters } from '../../../src/handlers/find-user-token';

describe('Test validateParameters', () => {
    test('no parameters specified', () => {
        expect(() => validateParameters(undefined)).toThrow('No query parameters were specified');
    });

    test('no user token', () => {
        const params = {
            wrongParameter: '',
        };
        expect(() => validateParameters(params)).toThrow('No userToken was specified');
    });

    test('user token found', () => {
        const params = {
            userToken: '123',
        };
        expect(validateParameters(params)).toStrictEqual(params);
    });
});

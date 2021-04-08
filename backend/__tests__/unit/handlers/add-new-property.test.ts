import { validateParameters } from '../../../src/handlers/add-new-property';

describe('Test validateParameters', () => {
    test('no parameters specified', () => {
        expect(() => validateParameters(undefined)).toThrow('No query parameters were specified');
    });

    // test('valid property definition', () => {
    //     const params = {
    //         name: 'Monticello',
    //         size: 1676,
    //         streetAddr: '931 Thomas Jefferson Pkwy',
    //         city: 'Charlottesville',
    //         zip: '22902',
    //         state: 'Virginia',
    //         price: 630.0,
    //         imgUrl:
    //             'https://monticello-www.s3.amazonaws.com/files/pages/square-xsml-annual-pass-monticello-25oct17-jlooney-0044.jpg',
    //     };
    // expect(validateParameters(params)).toStrictEqual(params);
    // });
});

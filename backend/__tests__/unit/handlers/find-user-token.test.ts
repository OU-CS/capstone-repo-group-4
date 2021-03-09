// Import all functions from get-all-items.js 
import  { findUserToken } from '../../../src/handlers/find-user-token'; 
 
// // This includes all tests for getAllItemsHandler() 
// describe('Test findUserToken', () => { 
    
//     it('should return ids', async () => { 
const event = { 
    httpMethod: 'GET' ,
    userToken: 'TEST'
} 
 
// Invoke helloFromLambdaHandler() 
const result = await findUserToken(event, {}, {}); 
console.log(result);
 
//         const expectedResult = { 
//             statusCode: 200, 
//             body: "token found"
//         }; 
 
//         // Compare the result with the expected result 
//         expect(result).toEqual(expectedResult); 
//     }); 
// }); 

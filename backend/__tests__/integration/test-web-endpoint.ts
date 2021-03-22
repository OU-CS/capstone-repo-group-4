import { CloudFormation, config } from 'aws-sdk';
import https from 'https';

/**
 * Make an API call to verify the stack exists.
 */
const getAndVerifyStackName = async () => {
    const stackName = 'roam';
    if (process.env.AWS_ACCESS_ID) {
        config.update({
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }
    config.update({
        region: 'us-east-2',
    });

    const client = new CloudFormation();
    try {
        await client
            .describeStacks({
                StackName: stackName,
            })
            .promise();
    } catch (e) {
        throw new Error(
            `Cannot find stack ${stackName}: ${e.message}\n` +
                `Please make sure stack with the name "${stackName}" exists.`,
        );
    }

    return stackName;
};

/**
 * This integration will make request to the API Gateway to verify the responses.
 * Make sure env variable AWS_SAM_STACK_NAME exists with the name of the stack we are going to test.
 */
describe('Test Web Endpoint', () => {
    let apiEndpoint: string;

    /**
     * Based on the provided stack name,
     * here we use cloudformation API to find out what the WebEndpoint URL is
     */
    beforeAll(async () => {
        const stackName = await getAndVerifyStackName();

        const client = new CloudFormation();
        const response = await client
            .describeStacks({
                StackName: stackName,
            })
            .promise();

        const stacks = response.Stacks;
        expect(stacks).not.toBe(undefined);
        expect(stacks).not.toBe([]);

        const stackOutputs = stacks[0].Outputs;
        const apiOutput = stackOutputs.find((output) => output.OutputKey === 'WebEndpoint');

        expect(apiOutput).not.toBe(undefined);

        apiEndpoint = apiOutput.OutputValue;
    });

    /**
     * Call the API Gateway endpoint GET /findtoken
     */
    it('GET /findtoken should return success', (done) => {
        console.info('api endpoint:', apiEndpoint);

        // TODO: Clean this up by making changing to Axios and creating a client based on apiEndpoint

        https
            .get(`${apiEndpoint}/findtoken?userToken=123`, (res) => {
                expect(res.statusCode).toBe(200);

                res.on('data', (data) => {
                    const response = JSON.parse(data);
                    expect(response).toBe('Token found');
                    done();
                });
            })
            .on('error', (e) => {
                throw e;
            });
    });
});

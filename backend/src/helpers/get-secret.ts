import { SecretsManager } from 'aws-sdk';

const secretsmanager = new SecretsManager();

const secretCache: { [secretName: string]: Record<string, string> } = {};

/**
 * Retrieves a secret from the secrets manager
 * and caches it
 *
 * @param secretName The name of the secret to retrieve from secrets manager
 */
export const getSecret = (
    secretName: string
): Promise<Record<string, string>> => {
    if (secretCache[secretName]) {
        return Promise.resolve(secretCache[secretName]);
    }

    return secretsmanager
        .getSecretValue({ SecretId: secretName })
        .promise()
        .then((secretData) => {
            const { data } = secretData.$response;
            if (data && data.SecretString) {
                const decodedSecret: Record<string, string> = JSON.parse(
                    data.SecretString
                );
                secretCache[secretName] = decodedSecret;
                return decodedSecret;
            }

            return Promise.reject(
                secretData.$response.error || new Error('Unable to retrieve secret')
            );
        });
};

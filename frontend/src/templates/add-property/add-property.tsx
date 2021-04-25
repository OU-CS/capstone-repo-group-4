import {
    Alert,
    AlertIcon,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    NumberInput,
    NumberInputField,
    Select,
    Stack,
    Textarea,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Layout } from '../../components';
import { useUser } from '../../hooks/use-user';
import { addNewProperty } from '../../services/api/api';
import { ApiFailedResponse } from '../../services/api/responses';
import { stateLabelValues } from '../../utils/state-abbreviations';

const AddProperty: FC = () => {
    const { loading: userLoading, user } = useUser();
    const [isSmallerThan740] = useMediaQuery('(max-width: 740px)');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [apt, setApt] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!userLoading && !user) {
            window.location.href = '/';
        }
    }, [userLoading]);

    const onSubmit = async () => {
        setLoading(true);
        console.log(address);
        const res = await addNewProperty({
            name,
            description,
            size: Number(size),
            imgUrl: image,
            pricePerDay: Number(price),
            streetAddr: `${address} ${apt}`,
            city,
            state,
            zip,
        });
        if (res.wasSuccessful) {
            window.location.href = '/';
        } else {
            setError((res as ApiFailedResponse).error);
            window.scrollTo(0, 0);
        }

        setLoading(false);
    };

    return (
        <Layout>
            <Heading>Add Listing</Heading>
            {error && (
                <Alert mt={4} w="fit-content" status="error">
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            <Stack
                direction={isSmallerThan740 ? 'column' : 'row'}
                alignItems="flex-start"
                spacing={isSmallerThan740 ? 2 : 8}
                my={4}
            >
                <VStack w="100%">
                    <FormControl isRequired>
                        <FormLabel>Property name</FormLabel>
                        <Input value={name} onChange={(val) => setName(val.target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            value={description}
                            onChange={(val) => setDescription(val.target.value)}
                            placeholder="Tell us about your property"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Number of Acres</FormLabel>
                        <InputGroup>
                            <NumberInput w="100%" value={size} onChange={(val) => setSize(val)}>
                                <NumberInputField borderRightRadius={0} />
                            </NumberInput>
                            <InputRightAddon>acres</InputRightAddon>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Image URL</FormLabel>
                        <Input value={image} onChange={(val) => setImage(val.target.value)} />
                        {image && (
                            <Image
                                objectFit="cover"
                                border="1px solid lightgray"
                                borderRadius={8}
                                mt={2}
                                maxH={256}
                                src={image}
                                alt="Unable to load image"
                            />
                        )}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Price per day</FormLabel>
                        <InputGroup>
                            <InputLeftAddon>$</InputLeftAddon>
                            <NumberInput w="100%" value={price} onChange={(val) => setPrice(val)}>
                                <NumberInputField borderLeftRadius={0} />
                            </NumberInput>
                        </InputGroup>
                    </FormControl>
                </VStack>
                <VStack w="100%">
                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input value={address} onChange={(val) => setAddress(val.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apartment, suite, etc.</FormLabel>
                        <Input value={apt} onChange={(val) => setApt(val.target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Input value={city} onChange={(val) => setCity(val.target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>State</FormLabel>
                        <Select value={state} onChange={(val) => setState(val.target.value)} placeholder="-">
                            {stateLabelValues.map((val) => (
                                <option key={val.value} value={val.label}>
                                    {val.label}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>ZIP Code</FormLabel>
                        <Input value={zip} onChange={(val) => setZip(val.target.value)} />
                    </FormControl>
                </VStack>
            </Stack>
            <Button isLoading={isLoading} type="submit" onClick={onSubmit} colorScheme="green" my={4}>
                Add Listing
            </Button>
        </Layout>
    );
};

export default AddProperty;

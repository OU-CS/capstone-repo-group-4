import {
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
import { FC, useState } from 'react';
import { Layout } from '../../components';
import { stateLabelValues } from '../../utils/state-abbreviations';

const AddProperty: FC = () => {
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

    const onSubmit = () => {
        console.log('test');
    };

    return (
        <Layout>
            <Heading>Add Listing</Heading>
            <Stack
                direction={isSmallerThan740 ? 'column' : 'row'}
                alignItems="flex-start"
                spacing={isSmallerThan740 ? 2 : 8}
                my={4}
            >
                <VStack w="100%">
                    <FormControl isRequired>
                        <FormLabel>Property name</FormLabel>
                        <Input state={[name, setName]} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Description</FormLabel>
                        <Textarea state={[description, setDescription]} placeholder="Tell us about your property" />
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
                        <Input state={[image, setImage]} />
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
                        <Input state={[address, setAddress]} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apartment, suite, etc.</FormLabel>
                        <Input state={[apt, setApt]} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Input state={[city, setCity]} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>State</FormLabel>
                        <Select value={state} onChange={(val) => setState(val.target.value)} placeholder="-">
                            {stateLabelValues.map((val) => (
                                <option value={val.label}>{val.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>ZIP Code</FormLabel>
                        <Input state={[zip, setZip]} />
                    </FormControl>
                </VStack>
            </Stack>
            <Button type="submit" onClick={onSubmit} colorScheme="green" my={4}>
                Add Listing
            </Button>
        </Layout>
    );
};

export default AddProperty;

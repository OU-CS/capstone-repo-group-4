import { Button, ButtonGroup } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/close-button';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { DateRange } from 'react-date-range';
import { getAllProperties } from '../../../services/api/api';
import { FullProperty } from '../../../services/api/types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export type RangeState = {
    startDate: Date;
    endDate: Date;
    key: string;
};

type DatePickerProps = {
    rangeState: [RangeState, Dispatch<SetStateAction<RangeState>>];
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const DatePicker: FC<DatePickerProps> = ({ rangeState, setOpen }) => {
    const [range, setRange] = rangeState;
    const [isLargerThan740] = useMediaQuery('(min-width: 740px)');

    return (
        <Box
            background="white"
            borderWidth="1px"
            borderRadius="lg"
            mt="3"
            display="flex"
            padding="5"
            justifyContent="center"
            position="relative"
            ml={isLargerThan740 ? '0' : '-30px'}
            overflowX={isLargerThan740 ? 'hidden' : 'scroll'}
            width={isLargerThan740 ? 'auto' : '100%'}
        >
            <DateRange
                showDateDisplay={false}
                months={isLargerThan740 ? 2 : 1}
                direction="horizontal"
                ranges={[range]}
                onChange={(e) => setRange(e.selection)}
            />
            <CloseButton position="absolute" right="2" top="2" onClick={() => setOpen(false)} />
        </Box>
    );
};

type DateRangePickerProps = {
    rangeState: [RangeState, Dispatch<SetStateAction<RangeState>>];
    now: Date;
    setProperties: Dispatch<SetStateAction<FullProperty[]>>;
};

export const DateRangePicker: FC<DateRangePickerProps> = ({ setProperties, rangeState, now }) => {
    const [range] = rangeState;
    const [isOpen, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const formatDate = (date: Date): string | null => {
        const comparable = (time: number) => (time - (time % 10000)) / 10000;

        if (!date || comparable(date.getTime()) === comparable(now.getTime())) {
            return 'Select date';
        }

        return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
    };

    const updateProperties = () => {
        setLoading(true);
        getAllProperties({
            startTime: range.startDate,
            endTime: range.endDate,
        }).then((res) => {
            if (res.wasSuccessful) {
                setProperties(res.body);
                setOpen(false);
            }
            setLoading(false);
        });
    };

    return (
        <Box mb="8">
            <HStack>
                <ButtonGroup onClick={() => setOpen(true)} variant="outline" isAttached>
                    <Button mr="-px">
                        <VStack width="100px" alignItems="baseline" spacing="0">
                            <Text fontSize="sm">Check In</Text>
                            <Text fontSize="xs" fontWeight="normal" color="gray">
                                {formatDate(range.startDate)}
                            </Text>
                        </VStack>
                    </Button>
                    <Button>
                        <VStack width="100px" alignItems="baseline" spacing="0">
                            <Text fontSize="sm">Check Out</Text>
                            <Text fontSize="xs" fontWeight="normal" color="gray">
                                {formatDate(range.endDate)}
                            </Text>
                        </VStack>
                    </Button>
                </ButtonGroup>
                <Button isLoading={isLoading} onClick={updateProperties}>
                    Search
                </Button>
            </HStack>
            {isOpen && <DatePicker setOpen={setOpen} rangeState={rangeState} />}
        </Box>
    );
};

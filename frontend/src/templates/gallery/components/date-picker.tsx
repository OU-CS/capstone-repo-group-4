import { Button, ButtonGroup } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/close-button';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { DateRange } from 'react-date-range';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type RangeState = {
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
            width={isLargerThan740 ? 'auto' : '100vw'}
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

export const DateRangePicker: FC = () => {
    const now = new Date();
    const [isOpen, setOpen] = useState(false);
    const [range, setRange] = useState<RangeState>({
        startDate: now,
        endDate: now,
        key: 'selection',
    });

    const formatDate = (date: Date): string | null => {
        if (date === now) {
            return 'Select date';
        }

        return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
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
                <Button>Search</Button>
            </HStack>
            {isOpen && <DatePicker setOpen={setOpen} rangeState={[range, setRange]} />}
        </Box>
    );
};

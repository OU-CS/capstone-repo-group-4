import { Wrap, WrapItem } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { FC } from 'react';

export type Activities = 'camping' | 'hunting' | 'fishing';

export type TagsProps = {
    activities: Activities[];
};

export const Tags: FC<TagsProps> = ({ activities }) => {
    if (activities.length === 0) {
        return <></>;
    }

    return (
        <Wrap spacing="2">
            {activities.map((activity) => (
                <WrapItem key={`tag-${activity}`}>
                    <Tag fontWeight="bold">{activity.toUpperCase()}</Tag>
                </WrapItem>
            ))}
        </Wrap>
    );
};

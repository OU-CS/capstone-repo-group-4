import { FC } from 'react';

export type LocationProps = {
    address: string;
};

export const Location: FC<LocationProps> = ({ address }) => (
    <iframe
        title={address}
        width="100%"
        height="400"
        style={{ borderRadius: '0.5 rem' }}
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC2bJwJQaQhsrMqfQwZUas51ouIwNUesTs&q=${address}`}
    />
);

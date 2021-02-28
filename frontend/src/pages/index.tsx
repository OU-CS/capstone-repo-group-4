import { GetServerSideProps, NextPage } from 'next';
import { Nav } from '../components';
import { UserProps, userServerSideProps } from '../hooks/use-user';
import Gallery from '../templates/gallery/gallery';

export const getServerSideProps: GetServerSideProps = userServerSideProps;

const Index: NextPage<UserProps> = ({ user }) => (
    <>
        <Nav user={user} />
        <Gallery />
    </>
);

export default Index;

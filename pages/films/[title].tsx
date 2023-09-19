import { useRouter } from 'next/router';

const Title = () => {
  const router = useRouter();
  const { title } = router.query;
  return <h1 className={'mt-5 ml-5'}>{decodeURI(title as string)} Details</h1>;
};

export default Title;

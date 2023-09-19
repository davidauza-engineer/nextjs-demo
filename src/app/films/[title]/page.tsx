type ParamsProps = {
  name: string;
};

type NameProps = {
  params: ParamsProps;
};

const Title: React.FC<NameProps> = ({ params }) => {
  const title = params.name;
  return <h1 className={'mt-5 ml-5'}>{decodeURI(title)} Details</h1>;
};

export default Title;
// components
import Page from "../Page/Page";
import Spinner from "./Spinner";

interface ISpinnerPage {
  message?: string;
}

const SpinnerPage = ({ message }: ISpinnerPage) => {
  return (
    <Page>
      <Spinner message={message} />
    </Page>
  );
};

export default SpinnerPage;

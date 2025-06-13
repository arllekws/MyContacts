import ButtonNewContact from "../../components/ButtonNewContact";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Error from "../../components/Error";
import { TfiFaceSad } from "react-icons/tfi";

export default function ErrorPage() {
  return (
    <div>
        <Header />
        <Input value="" onChange={() => {}} />
        <ButtonNewContact />
        <hr/>

        <div className="error-container">
          <Error />
          <TfiFaceSad />
        </div>
    </div>
  )
}

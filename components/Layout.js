import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./Head";

export default function Layout(props) {
 return  <>
    <PageHead />
    <Header />
    {props.children}
    <Footer />
  </>;
}

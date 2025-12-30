import Image from "next/image";
import Banner from "./banner/page";
import SeceondBanner from "./Components/SeceondBanner";
import Pedicure from "./Components/Pedicure";
import Products from "./products/page";
import Comment from "./Components/Comment";
import Offer from "./Components/Offer";
import Videos from "./Components/Videos";
import BookNow from "./bookNow/page";
import Brands from "./Components/Brands";
import Article from "./Components/Aricle";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <SeceondBanner></SeceondBanner>
      <Pedicure></Pedicure>
      <Products></Products>

      <Offer></Offer>
      <Videos></Videos>
      <Comment></Comment>
      <BookNow></BookNow>
      <Brands></Brands>
      <Article></Article>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

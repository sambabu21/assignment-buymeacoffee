import Footer from "../../Layout/Footer";
import Banner from "./Banner";
import CreatorSection from "./CreatorSection";

import FeaturePage from "./FeaturePage";

export default function Home(){
    return (
        <div>
            <Banner />
            <FeaturePage />
            <CreatorSection />
            <Footer />
        </div>
    )
}
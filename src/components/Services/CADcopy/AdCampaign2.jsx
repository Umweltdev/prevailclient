import HeroComponent from '../ReusedComponenets/HeroComponent';
import AppBarNav from '../../Navbar/Appbar';
import HeroSection from './HeroSection';
import Packages from './Packages';
import AddOns from './AddOns';
import TrustBuilders from './TrustBuilders';
import HowItWorks from './HowItWorks';
import Modal from './Modal';
import FooterNew from '../../Footer/FooterNew.jsx';

const AdCampaign2 = () => { 
    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <HeroComponent title={"Content Ad Campaign Package 2"} />
        <AppBarNav color="#000" />
        <HeroSection />
        <AddOns />
        <TrustBuilders />
        <HowItWorks />
        <Modal />
        <Packages />
        <FooterNew />
      </div>
    );
}

export default AdCampaign2;
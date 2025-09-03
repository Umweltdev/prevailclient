import react from 'react';
import HeroComponent from '../ReusedComponenets/HeroComponent';
import AppBarNav from '../../Navbar/Appbar';
import HeroSection from './HeroSection';
import Packages from './Packages';
import AddOns from './AddOns';
import TrustBuilders from './TrustBuilders';
import HowItWorks from './HowItWorks';
import Modal from './Modal';

const AdCampaign = () => { 
    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <HeroComponent title={"Ad Campaign Package"} />
            <AppBarNav color="#000" />
            <HeroSection />
            <Packages />
            <AddOns />
            <TrustBuilders />
            <HowItWorks />
            <Modal />
        </div>
    )
}

export default AdCampaign;
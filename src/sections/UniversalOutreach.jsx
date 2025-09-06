import { CampaignTypes } from "./CampaignTypes.jsx"
import { CombinedPowersStory } from "./CombinedPowersStory.jsx"
import { CTASection } from "./CTASection.jsx"
import { DashboardSection } from "./DashboardSection.jsx"
import { HeroSection } from "./HeroSection.jsx"
import { HiddenCostStory } from "./HiddenCostStory.jsx"
import { LaunchWeekCaseStudy } from "./LaunchWeekCaseStudy.jsx"
import { LiveDemoSection } from "./LiveDemoSection.jsx"
import { PlatformIntegrations } from "./PlatformIntegrations.jsx"
import { RealTimeControlStory } from "./RealTimeControlStory.jsx"
import { SafetyControl } from "./SafetyControl.jsx"
import { SuperpowersSection } from "./SuperpowersSection.jsx"

export const UniversalOutreach = () => {
  return (
    <>
      <HeroSection />
      <SuperpowersSection />
      <LiveDemoSection />
      <RealTimeControlStory />
      <HiddenCostStory />
      <CombinedPowersStory />
      <DashboardSection />
      <LaunchWeekCaseStudy />
      <CampaignTypes />
      <PlatformIntegrations />
      <SafetyControl />
      <CTASection />
    </>
  )
};
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WorkIcon from '@mui/icons-material/Work';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

export const industries = [
  { id: 'restaurant', icon: <RestaurantIcon sx={{ fontSize: 40 }} color="primary" />, title: 'Restaurant & Food', description: 'Restaurants, Takeaways, Cafes' },
  { id: 'retail', icon: <StorefrontIcon sx={{ fontSize: 40 }} color="primary" />, title: 'Retail & E-commerce', description: 'Shops, Online Stores, Boutiques' },
  { id: 'services', icon: <WorkIcon sx={{ fontSize: 40 }} color="primary" />, title: 'Professional Services', description: 'Consulting, Legal, Financial' },
  { id: 'hospitality', icon: <HolidayVillageIcon sx={{ fontSize: 40 }} color="primary" />, title: 'Hospitality & Events', description: 'Hotels, Venues, Tourism' },
  { id: 'property', icon: <HouseSidingIcon sx={{ fontSize: 40 }} color="primary" />, title: 'Property & Real Estate', description: 'Agents, Management, Development' },
  { id: 'other', icon: <RocketLaunchIcon sx={{ fontSize: 40 }} color="primary" />, title: 'Other Industry', description: 'Tell us about your business' },
];

export const goals = [
  { id: 'fees', icon: <AttachMoneyIcon sx={{ fontSize: 40 }} color="secondary" />, title: 'Eliminate Platform Fees', desc1: 'Stop paying 20-35% commission', desc2: 'Save £1,000-5,000/month' },
  { id: 'brand', icon: <PaletteIcon sx={{ fontSize: 40 }} color="secondary" />, title: 'Build Brand Identity', desc1: 'Create unique digital presence', desc2: '73% better brand recall' },
  { id: 'automation', icon: <BoltIcon sx={{ fontSize: 40 }} color="secondary" />, title: 'Automate Operations', desc1: 'Streamline workflows', desc2: '15-20 hours/week saved' },
  { id: 'scale', icon: <TrendingUpIcon sx={{ fontSize: 40 }} color="secondary" />, title: 'Scale Your Business', desc1: 'Systems that grow with you', desc2: 'Multi-location ready' },
  { id: 'customers', icon: <PeopleIcon sx={{ fontSize: 40 }} color="secondary" />, title: 'Own Customer Relationships', desc1: 'Direct customer connection', desc2: 'Build lasting loyalty' },
  { id: 'data', icon: <BarChartIcon sx={{ fontSize: 40 }} color="secondary" />, title: 'Data-Driven Decisions', desc1: 'Analytics for growth', desc2: 'Real-time dashboards' },
];

export const solutionsData = {
  "Restaurant & Food": [
    {
      title: "Executive Chef Dashboard",
      desc: "Centralize kitchen operations, track food costs, and engineer your menu for profitability.",
      price: 1500,
      features: [
        "Recipe standardization",
        "Food cost optimization",
        "Quality control checks",
        "20% discount applied",
      ],
    },
    {
      title: "Table & Reservation System",
      desc: "A smart system to manage bookings, optimize seating arrangements, and reduce wait times.",
      price: 1500,
      features: [
        "Real-time seating optimization",
        "Automated wait time management",
        "Online reservation balancing",
        "20% discount applied",
      ],
    },
    // ... other restaurant solutions ...
  ],
  "Retail & E-commerce": [
    {
      title: "E-commerce Analytics",
      desc: "Gain deep insights into your online store's performance and customer behavior.",
      price: 1800,
      features: [
        "Conversion rate tracking",
        "Cart abandonment analysis",
        "Customer lifetime value",
        "20% discount applied",
      ],
    },
    {
      title: "Inventory & Stock Sync",
      desc: "Sync stock levels in real-time between your online store and physical locations.",
      price: 1600,
      features: [
        "Real-time stock level updates",
        "Multi-location synchronization",
        "Automated low stock alerts",
        "20% discount applied",
      ],
    },
  ],
  "Professional Services": [
    {
      title: "Client Project Tracker",
      desc: "Manage project timelines, budgets, and deliverables from a single dashboard.",
      price: 1700,
      features: [
        "Milestone and deadline tracking",
        "Automated time logging",
        "Client billing & invoice integration",
        "20% discount applied",
      ],
    },
    {
      title: "Appointment Booking System",
      desc: "Allow clients to schedule appointments online and automate your calendar.",
      price: 1200,
      features: [
        "Public-facing online calendar",
        "Automated email/SMS reminders",
        "Upfront payment integration",
        "20% discount applied",
      ],
    },
  ],
  "Hospitality & Events": [
    {
      title: "Event & Venue Booking",
      desc: "Streamline the booking process for events, conferences, and private functions.",
      price: 1900,
      features: [
        "Real-time availability calendar",
        "Customizable booking forms",
        "Deposit and payment processing",
        "20% discount applied",
      ],
    },
    {
      title: "Room & Resource Management",
      desc: "Manage hotel room inventory, amenities, and staff assignments efficiently.",
      price: 1600,
      features: [
        "Visual room booking calendar",
        "Housekeeping status tracking",
        "Integration with channel managers",
        "20% discount applied",
      ],
    },
  ],
  "Property & Real Estate": [
    {
      title: "Property Listing Platform",
      desc: "A comprehensive platform for showcasing listings with high-res media and virtual tours.",
      price: 2200,
      features: [
        "Advanced search and filtering",
        "Agent profile pages",
        "Lead capture forms",
        "20% discount applied",
      ],
    },
    {
      title: "Tenant & Lease Management",
      desc: "Automate rent collection, maintenance requests, and communication with tenants.",
      price: 1800,
      features: [
        "Online rent payment portal",
        "Maintenance ticket system",
        "Lease agreement storage",
        "20% discount applied",
      ],
    },
  ],
};

export const dashboardsData = [
  { title: 'Financial Management', desc: 'Complete financial oversight', price: 1500, features: ['P&L tracking', 'Cash flow forecasting', 'Budget analysis', '20% discount applied'] },
  { title: 'Customer Relationship', desc: 'CRM & insights', price: 1500, features: ['Customer database', 'Lifetime value', 'Satisfaction tracking', '20% discount applied'] },
  { title: 'Employee Management', desc: 'HR & workforce', price: 1500, features: ['Staff scheduling', 'Performance reviews', 'Payroll tracking', '20% discount applied'] },
  { title: 'Marketing & Sales', desc: 'Growth tracking', price: 1500, features: ['Lead generation', 'Campaign ROI', 'Pipeline management', '20% discount applied'] },
  { title: 'Operations Analytics', desc: 'KPI monitoring', price: 1500, features: ['Process efficiency', 'Quality metrics', 'Risk assessment', '20% discount applied'] },
  { title: 'Inventory Management', desc: 'Stock control', price: 1500, features: ['Stock levels', 'Reorder automation', 'Supplier tracking', '20% discount applied'] },
];

export const platformsData = [
  { title: 'Foundation', priceRange: '£600 - £1000', price: 800, features: ['Professional Website', 'Mobile Responsive', 'Basic SEO', 'Contact Forms', 'Social Media Links'] },
  { title: 'Full System', priceRange: '£1200 - £2000', price: 1600, features: ['Everything in Foundation', 'Complete Ordering System', 'Customer Database', 'Email Automation', 'Payment Processing'] },
  { title: 'Premium', priceRange: '£1800 - £3000', price: 2400, features: ['Everything in Full System', 'Advanced Analytics', 'Multi-location Support', 'API Access', 'AI Predictions'] },
];
export const properties = [
  { id: 1, title: "Modern 3BHK Apartment", type: "Apartment", status: "Sale", price: 8500000, city: "Chennai", address: "OMR, Sholinganallur", beds: 3, baths: 2, area: 1650, agentId: 1, image: "/images/p1.jpg",
    description: "A bright and spacious 3BHK apartment in a gated community with great connectivity to IT corridors, schools and hospitals.",
    features: ["Covered Parking", "24/7 Security", "Gym", "Swimming Pool", "Power Backup", "Lift"] },
  { id: 2, title: "Luxury Villa with Garden", type: "Villa", status: "Sale", price: 32500000, city: "Bengaluru", address: "Whitefield", beds: 4, baths: 4, area: 3800, agentId: 2, image: "/images/p2.jpg",
    description: "An elegant independent villa with a private garden, modular kitchen and premium finishes in a quiet neighbourhood.",
    features: ["Private Garden", "Home Theatre", "Modular Kitchen", "Solar Panels", "CCTV", "Club House"] },
  { id: 3, title: "Cozy 2BHK for Rent", type: "Apartment", status: "Rent", price: 25000, city: "Coimbatore", address: "RS Puram", beds: 2, baths: 2, area: 1100, agentId: 3, image: "/images/p3.jpg",
    description: "Well-maintained semi-furnished apartment close to markets, restaurants and public transport.",
    features: ["Semi Furnished", "Parking", "Water Supply 24/7", "Lift"] },
  { id: 4, title: "Premium DTCP Plot", type: "Plot", status: "Sale", price: 4200000, city: "Coimbatore", address: "Saravanampatti", beds: 0, baths: 0, area: 2400, agentId: 3, image: "/images/p4.jpg",
    description: "Clear-title DTCP approved plot in a fast-growing area. Ideal for building a dream home or long-term investment.",
    features: ["DTCP Approved", "Clear Title", "Corner Plot", "Tar Road"] },
  { id: 5, title: "Sea-View Penthouse", type: "Apartment", status: "Sale", price: 45000000, city: "Chennai", address: "ECR, Neelankarai", beds: 4, baths: 5, area: 4200, agentId: 1, image: "/images/p5.jpg",
    description: "A stunning penthouse with panoramic sea views, private terrace and world-class amenities.",
    features: ["Sea View", "Private Terrace", "Infinity Pool", "Concierge", "Smart Home", "3 Parking"] },
  { id: 6, title: "Family House near IT Park", type: "House", status: "Sale", price: 12800000, city: "Bengaluru", address: "Electronic City", beds: 3, baths: 3, area: 2000, agentId: 2, image: "/images/p6.jpg",
    description: "Independent 3BHK house with a spacious car porch and balcony, five minutes from major tech parks.",
    features: ["Car Porch", "Balcony", "Borewell", "Vastu Compliant"] },
  { id: 7, title: "Studio Apartment for Rent", type: "Apartment", status: "Rent", price: 16000, city: "Chennai", address: "Anna Nagar", beds: 1, baths: 1, area: 520, agentId: 1, image: "/images/p7.jpg",
    description: "Fully furnished studio perfect for working professionals, near metro and shopping areas.",
    features: ["Fully Furnished", "Wi-Fi Ready", "AC", "Security"] },
  { id: 8, title: "Contemporary 3BHK Villa", type: "Villa", status: "Rent", price: 55000, city: "Bengaluru", address: "Sarjapur Road", beds: 3, baths: 3, area: 2200, agentId: 2, image: "/images/p8.jpg",
    description: "Beautiful villa in a premium gated layout with parks, a clubhouse and 24/7 security.",
    features: ["Gated Community", "Park", "Club House", "Parking", "Power Backup"] },
];

export const cities = [...new Set(properties.map((p) => p.city))];
export const types = [...new Set(properties.map((p) => p.type))];
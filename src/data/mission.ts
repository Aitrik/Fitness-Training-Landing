import { Target, Users, Heart, Zap, Award, Globe } from 'lucide-react';

export const missionData = {
    about: {
        label: "About Us",
        title: "WE ARE A MULTI HEALTH CULTURE PLATFORM",
        description: "That offers a systematic and healthy lifestyle through long term know-how and professional experience. Our goal is to provide our clients with a beneficial experience to offer increased life vitality.",
        image: "/assets/hero-athlete.jpg",
        cta: "Learn More",
        stats: [
            { label: "Lifetime Partnership", value: "forever" },
            { label: "Technology + Science", value: "100%" },
            { label: "Beneficial Experience", value: "Guaranteed" },
            { label: "Long Term", value: "Focus" }
        ]
    },
    mission: {
        label: "Our Mission",
        title: "THE TIME IS NOW",
        description: "Mission to bring like-minded people from Strength & Conditioning and Health & Wellness sector together and work towards a common goal of making the nation healthier & stronger.",
        image: "/assets/pillar-mindset.jpg",
    },
    stakeholders: {
        label: "Stakeholders",
        title: "WHO WE SERVE",
        items: [
            {
                icon: Users,
                title: "General Population",
                description: "Individuals & Groups seeking better health."
            },
            {
                icon: Globe,
                title: "Institutions",
                description: "Schools, Colleges, Sports Academies & Corporates."
            },
            {
                icon: Award,
                title: "Sports Centric",
                description: "Sportsmen & aspiring sports professionals across all age groups."
            },
            {
                icon: Heart,
                title: "Medical Needs",
                description: "Customized rehabilitation programs."
            }
        ]
    },
    goals: {
        label: "Our Goals",
        items: [
            {
                icon: Zap,
                title: "Enhance Human Performance",
                description: "Pushing boundaries to achieve peak potential."
            },
            {
                icon: Heart,
                title: "Reduce Injuries",
                description: "Scientifically designed programs to prevent setbacks."
            },
            {
                icon: Users,
                title: "Motivate via Education",
                description: "Empowering you with knowledge about your body."
            },
            {
                icon: Award,
                title: "Finally Produce Results",
                description: "Tangible, measurable improvements."
            }
        ]
    }
};

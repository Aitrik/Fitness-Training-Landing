import { TrendingUp, ShieldCheck, GraduationCap, Target } from 'lucide-react';

export const missionData = {
    about: {
        label: "About Us",
        title: {
            prefix: "I help athletes turn raw effort into",
            highlight: "real results",
            suffix: "— through structured training."
        },
        description: "For over two decades, I've worked with athletes at different levels — from those just finding their rhythm to seasoned pros looking to refine their edge. My approach combines cutting-edge science with practical, battle-tested methods.",
        image: "/assets/coaching-session.jpg",
        cta: "Read More"
    },
    goals: {
        label: "Our Goals",
        items: [
            {
                icon: TrendingUp,
                title: 'Enhance Performance',
                description: 'Push your limits with scientifically-backed training protocols.',
            },
            {
                icon: ShieldCheck,
                title: 'Reduce Injuries',
                description: 'Prevent setbacks through proper movement patterns.',
            },
            {
                icon: GraduationCap,
                title: 'Motivate via Education',
                description: 'Knowledge empowers lasting transformation.',
            },
            {
                icon: Target,
                title: 'Produce Results',
                description: 'Data-driven progress tracking for real achievements.',
            },
        ]
    }
};

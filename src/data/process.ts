import { Scan, PenTool, Zap, BarChart3 } from 'lucide-react';

export const processData = {
    services: {
        label: "Programs & Services",
        items: [
            {
                title: 'One on One Training',
                description: 'Each session is tailored to the player\'s age, level and goals. We focus on fundamentals, scoring ability, and mental toughness.',
                image: "/assets/coaching-session.jpg",
            },
            {
                title: 'Small Group Training',
                description: 'Competitive drills with 2-4 players. Build chemistry, communication, and game-like scenarios.',
                image: "/assets/pillar-movement.jpg",
            },
            {
                title: 'Team Coaching',
                description: 'Complete team programs focusing on systems, plays, and collective improvement.',
                image: "/assets/training-group.jpg",
            },
        ]
    },
    process: {
        label: "How Training Works",
        image: "/assets/coaching-session.jpg",
        steps: [
            {
                icon: Scan,
                step: 'STEP 1',
                title: 'Assessment',
                description: 'We evaluate current skills, habits, and goals.',
            },
            {
                icon: PenTool,
                step: 'STEP 2',
                title: 'Personal Plan',
                description: 'A clear training focus based on what the player needs most.',
            },
            {
                icon: Zap,
                step: 'STEP 3',
                title: 'Consistent Training',
                description: 'Focused sessions with feedback and adjustments.',
            },
            {
                icon: BarChart3,
                step: 'STEP 4',
                title: 'Ongoing Progress',
                description: 'We track improvement and refine the plan as the player grows.',
            },
        ]
    }
};

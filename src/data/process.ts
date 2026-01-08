import { Scan, PenTool, Zap, BarChart3, Settings, ShieldCheck } from 'lucide-react';

export const processData = {
    edge: {
        label: "Our Edge",
        title: "WHY CHOOSE SCCS",
        description: "At SCCS, we pride ourselves at going above and beyond the regular body composition analysis to include categorization free testing protocols, cutting edge technological advancements, and a very strong and well-researched evidence backed science to chart out each program.",
        features: [
            "World-Class Program Builder",
            "Fully Customizable Movement Library",
            "Athlete & Team Tracking & Analysis",
            "Proprietary Smart Program Design",
            "Remote Engagement"
        ]
    },
    technology: {
        title: "Technology + Science",
        description: "We use insights and framework to build your training program. We've combined advanced training tools with an easy-to-use platform to help our trainers, coaches, physical therapists, and athletes achieve better outcomes.",
    },
    process: {
        label: "The Process",
        image: "/assets/coaching-session.jpg",
        steps: [
            {
                icon: Scan,
                title: "Assessment",
                description: "Perform movement activities using world top class technology.",
            },
            {
                icon: PenTool,
                title: "Insight Generation",
                description: "We use insights and framework to build your training program.",
            },
            {
                icon: Settings,
                title: "Program Design",
                description: "Evaluation based program designed by qualified professionals.",
            },
            {
                icon: Zap,
                title: "Execution",
                description: "Practical execution of the program based on client's status.",
            },
            {
                icon: BarChart3,
                title: "Training",
                description: "Consistent training sessions both online or on-site.",
            },
            {
                icon: ShieldCheck,
                title: "Improvise",
                description: "Refining the plan based on ongoing progress and feedback.",
            }
        ]
    }
};

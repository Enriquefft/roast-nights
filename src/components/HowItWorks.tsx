import {
	Beer,
	CheckCircle,
	ExternalLink,
	MessageCircle,
	Mic,
	Users,
} from "lucide-react";
import Image from "next/image";

const features = [
	{
		description:
			"Founders take turns presenting their ideas, problems, or questions to the group.",
		icon: <Mic className="h-6 w-6 text-roast-red" />,
		title: "Stand Up & Pitch",
	},
	{
		description:
			"The community provides direct, unfiltered feedback — no sugar coating guaranteed.",
		icon: <MessageCircle className="h-6 w-6 text-roast-red" />,
		title: "Receive Honest Feedback",
	},
	{
		description:
			"Connect with fellow founders and seasoned professionals in your stage.",
		icon: <Users className="h-6 w-6 text-roast-red" />,
		title: "Learn & Network",
	},
	{
		description:
			"Spice up feedback with light-hearted drinking rules. Bad pitch? Network miss? Chug responsibly! (Group consent required)",
		icon: <Beer className="h-6 w-6 text-roast-yellow" />,
		title: "Drinking Game (Optional & Consensual!)",
		variant: "accent",
	},
];

const HowItWorks = () => {
	return (
		<section className="py-20 px-4" id="how-it-works">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Not an event, but a casual reunion with a simple format designed to
						maximize value.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={`glass-card p-6 rounded-xl relative overflow-hidden hover:border-roast-yellow/50 transition-all duration-300 ${
								feature.variant === "accent"
									? "border-2 border-roast-yellow/30"
									: ""
							}`}
						>
							<div className="mb-4 p-3 rounded-lg bg-roast-gray inline-block">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="text-muted-foreground">{feature.description}</p>
							{feature.variant === "accent" && (
								<div className="mt-4 flex items-center text-sm text-roast-yellow">
									<CheckCircle className="mr-2 h-4 w-4" />
									Group Consent is Key
								</div>
							)}
							<div className="absolute -bottom-1 -right-1 w-20 h-20 bg-roast-yellow opacity-5 rounded-full"></div>
						</div>
					))}
				</div>

				<div className="mt-20 p-6 glass-card rounded-xl border border-roast-lightgray/30 flex flex-col md:flex-row items-center justify-between">
					<div className="mb-6 md:mb-0 md:mr-6 shrink-0">
						<Image
							src="/spinout.png"
							height={50}
							width={250}
							alt="SpinOut Logo"
							className="h-16 md:h-20"
						/>
					</div>
					<div className="text-center md:text-left">
						<h3 className="text-xl font-bold mb-2">
							An Initiative Born on SpinOut
						</h3>
						<p className="text-muted-foreground mb-4">
							Roast Nights is proudly born from SpinOut's mission of
							"Dinamizamos ecosistemas de innovación & emprendimiento" - we
							energize innovation & entrepreneurship ecosystems.
						</p>
						<a
							href="https://spinoutworld.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-roast-red hover:text-roast-red/80 transition-colors"
						>
							Visit SpinOut <ExternalLink className="ml-1 h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;

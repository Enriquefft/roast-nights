import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
	{
		description:
			"We believe in unfiltered, constructive criticism. Every piece of feedback is an opportunity for growth.",
		title: "0% Sugarcoating",
	},
	{
		description:
			"No holding back. If something doesn't make sense, we'll tell you directly.",
		title: "100% Honesty",
	},
	{
		description:
			"No feedback is 100% right. We encourage respectful debates that lead to better understanding.",
		title: "Healthy Debate",
	},
	{
		description:
			"From first-time founders to serial entrepreneurs, everyone has something valuable to contribute.",
		title: "All Experience Levels",
	},
	{
		description:
			"We host dedicated events for different startup stages to ensure relevant feedback.",
		title: "Stage-Specific Sessions",
	},
	{
		description:
			"This isn't a formal event - it's a casual reunion with real talk and real connections.",
		title: "Casual Environment",
	},
];

const CommunityValues = () => {
	return (
		<section className="py-20 px-4" id="values">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Our Community Values
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						The principles that guide our brutal but constructive feedback
						sessions.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{values.map((value) => (
						<Card
							key={value.title}
							className="bg-roast-darkgray border-roast-lightgray p-6"
						>
							<div className="flex items-start">
								<CheckCircle className="h-6 w-6 text-roast-yellow mt-1 mr-3 shrink-0" />
								<div>
									<h3 className="text-xl font-bold mb-2">{value.title}</h3>
									<p className="text-muted-foreground">{value.description}</p>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default CommunityValues;

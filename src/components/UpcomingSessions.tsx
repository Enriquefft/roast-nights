import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sessions = [
	{
		date: "April 15, 2025",
		id: 1,
		location: "Tech Hub Downtown",
		spotsLeft: 8,
		tags: ["Acceleration", "English Only"],
		time: "6:30 PM - 9:30 PM",
		title: "Acceleration Stage Founders",
	},
	{
		date: "April 29, 2025",
		id: 2,
		location: "Innovation Center",
		spotsLeft: 5,
		tags: ["Pre-Seed", "Bilingual"],
		time: "7:00 PM - 10:00 PM",
		title: "Pre-Seed Startups Roast",
	},
	{
		date: "May 13, 2025",
		id: 3,
		location: "Startup Studio East",
		spotsLeft: 12,
		tags: ["All Stages", "Female Founders"],
		time: "6:00 PM - 9:00 PM",
		title: "Female Founders Edition",
	},
];

const UpcomingSessions = () => {
	return (
		<section className="py-20 px-4 bg-roast-darkgray" id="upcoming">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Upcoming Sessions
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Join our next feedback rounds. Each session is focused on specific
						startup stages.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{sessions.map((session) => (
						<Card
							key={session.id}
							className="bg-roast-gray border-roast-lightgray overflow-hidden"
						>
							<div className="p-6">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-xl font-bold">{session.title}</h3>
									<Badge
										variant="outline"
										className="bg-roast-red/10 text-roast-red border-roast-red/20"
									>
										{session.spotsLeft} spots left
									</Badge>
								</div>

								<div className="space-y-3 mb-6">
									<div className="flex items-center text-muted-foreground">
										<Calendar className="h-4 w-4 mr-2" />
										<span>{session.date}</span>
									</div>
									<div className="flex items-center text-muted-foreground">
										<Clock className="h-4 w-4 mr-2" />
										<span>{session.time}</span>
									</div>
									<div className="flex items-center text-muted-foreground">
										<MapPin className="h-4 w-4 mr-2" />
										<span>{session.location}</span>
									</div>
								</div>

								<div className="flex flex-wrap gap-2 mb-6">
									{session.tags.map((tag) => (
										<Badge
											key={tag}
											variant="secondary"
											className="bg-roast-lightgray text-white"
										>
											{tag}
										</Badge>
									))}
								</div>

								<Button className="w-full bg-roast-red hover:bg-roast-red/90">
									Reserve Spot
								</Button>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default UpcomingSessions;

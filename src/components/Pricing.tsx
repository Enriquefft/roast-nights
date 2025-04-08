import { ArrowRight, Beer, Utensils } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const Pricing = () => {
	return (
		<section className="py-20 px-4" id="pricing">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Community-Powered Sessions
				</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
					No fees, no subscriptions — just bring something to share
				</p>

				<Card className="glass-card overflow-hidden border-roast-lightgray relative mx-auto max-w-md">
					<div className="absolute -top-10 -right-10 w-40 h-40 bg-roast-red opacity-10 rounded-full"></div>

					<CardHeader className="pb-4">
						<div className="flex justify-center mb-2">
							<Badge className="bg-roast-red text-white border-0 px-3 py-1">
								100% FREE
							</Badge>
						</div>
						<CardTitle className="text-2xl">
							Community Contribution Model
						</CardTitle>
					</CardHeader>

					<CardContent className="pb-6">
						<ul className="space-y-4 text-left">
							<li className="flex items-start gap-3">
								<Utensils className="h-5 w-5 text-roast-yellow mt-1 shrink-0" />
								<span>Participants bring food to share with the community</span>
							</li>
							<li className="flex items-start gap-3">
								<Beer className="h-5 w-5 text-roast-yellow mt-1 shrink-0" />
								<span>
									Everyone contributes drinks (especially if playing drinking
									games)
								</span>
							</li>
						</ul>
					</CardContent>

					<CardFooter className="pt-0 pb-6 flex justify-center">
						<Button className="bg-roast-red hover:bg-roast-red/90 text-white">
							Join The Community
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
};

export default Pricing;

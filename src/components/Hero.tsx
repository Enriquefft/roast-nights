import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="flex flex-col items-center pt-20 lg:pt-32 px-4">
			<div className="relative z-10">
				<div className="absolute -top-40 -right-20 w-64 h-64 bg-roast-red rounded-full opacity-20 blur-3xl"></div>
				<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-roast-yellow rounded-full opacity-20 blur-3xl"></div>
			</div>

			<div className="relative max-w-4xl mx-auto text-center z-20">
				<div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-roast-gray border border-roast-lightgray">
					<Zap size={16} className="text-roast-yellow mr-2" />
					<span className="text-sm font-medium">
						No sugarcoating, just brutal honesty
					</span>
				</div>

				<div className="mb-8 flex justify-center">
					<Image
						src="/logo.png"
						width={200}
						height={144}
						alt="Roast Nights Logo"
						className="h-40 md:h-56"
					/>
				</div>

				<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
					<span className="text-white">Roast</span>
					<span className="text-roast-red"> Nights </span>
				</h1>

				<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
					A community where founders get the feedback they actually need, not
					what they want to hear.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						size="lg"
						className="bg-roast-red hover:bg-roast-red/90 text-white"
					>
						Join Next Session
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="border-roast-lightgray"
					>
						Learn More
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;

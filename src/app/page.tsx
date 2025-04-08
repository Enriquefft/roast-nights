import CommunityValues from "@/components/CommunityValues";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import JoinCommunity from "@/components/JoinCommunity";
import Pricing from "@/components/Pricing";
import UpcomingSessions from "@/components/UpcomingSessions";

/**
 * @returns Home page component
 */
export default async function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<HowItWorks />
			<UpcomingSessions />
			<CommunityValues />
			<Pricing />
			<JoinCommunity />
			<Footer />
		</main>
	);
}

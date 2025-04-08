"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setMobileMenuOpen(false);
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "py-3 bg-roast-dark/95 backdrop-blur-xs border-b border-roast-lightgray/20"
					: "py-5"
			}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<div className="flex items-center">
					<div className="flex items-center">
						<Image
							src="/icon.png"
							width={32}
							height={32}
							alt="Roast Nights Logo"
							className="h-8 mr-3"
						/>
						<div>
							<span className="text-xl font-extrabold text-white mr-1">
								ROAST
							</span>
							<span className="text-xl font-extrabold text-roast-red">
								NIGHTS
							</span>
						</div>
					</div>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					<button
						type="button"
						onClick={() => scrollToSection("how-it-works")}
						className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
					>
						How It Works
					</button>
					<button
						type="button"
						onClick={() => scrollToSection("upcoming")}
						className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
					>
						Upcoming Sessions
					</button>
					<button
						type="button"
						onClick={() => scrollToSection("values")}
						className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
					>
						Community Values
					</button>
					<Button
						type="button"
						onClick={() => scrollToSection("join")}
						variant="default"
						size="sm"
						className="bg-roast-red hover:bg-roast-red/90"
					>
						Join Us
					</Button>
				</nav>

				{/* Mobile Menu Button */}
				<button
					type="button"
					className="md:hidden text-white"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden fixed inset-0 mt-16 bg-roast-dark z-40 p-4">
					<div className="flex flex-col space-y-6 p-4">
						<button
							type="button"
							onClick={() => scrollToSection("how-it-works")}
							className="text-lg font-medium py-2 text-white border-b border-roast-lightgray/20"
						>
							How It Works
						</button>
						<button
							type="button"
							onClick={() => scrollToSection("upcoming")}
							className="text-lg font-medium py-2 text-white border-b border-roast-lightgray/20"
						>
							Upcoming Sessions
						</button>
						<button
							type="button"
							onClick={() => scrollToSection("values")}
							className="text-lg font-medium py-2 text-white border-b border-roast-lightgray/20"
						>
							Community Values
						</button>
						<Button
							onClick={() => scrollToSection("join")}
							variant="default"
							size="lg"
							className="mt-4 bg-roast-red hover:bg-roast-red/90"
						>
							Join Us
						</Button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;

import { ExternalLink, MailIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-roast-darkgray py-12 px-4 border-t border-roast-lightgray">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<div className="flex items-center mb-4">
							<Image
								src="/icon.png"
								alt="Roast Nights Logo"
								className="h-8 mr-3"
								width={32}
								height={32}
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
						<p className="text-muted-foreground mb-6 max-w-md">
							A community of startup founders and industry experts providing
							honest, no-sugarcoating feedback to help startups grow and
							succeed.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://wa.link/w893f8"
								className="text-muted-foreground hover:text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-whatsapp"
									viewBox="0 0 16 16"
								>
									<title>Whatsapp</title>
									<path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
								</svg>
							</a>
						</div>

						<div className="mt-6 flex items-center">
							<span className="text-sm text-muted-foreground">
								An initiative born on
							</span>
							<a
								href="https://spinoutworld.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2 flex items-center hover:opacity-80 transition-opacity"
							>
								<Image
									src="/spinout.png"
									alt="SpinOut"
									height={25}
									width={100}
									className="h-6"
								/>
								<ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#how-it-works"
									className="text-muted-foreground hover:text-white"
								>
									How It Works
								</a>
							</li>
							<li>
								<a
									href="#upcoming"
									className="text-muted-foreground hover:text-white"
								>
									Upcoming Sessions
								</a>
							</li>
							<li>
								<a
									href="#values"
									className="text-muted-foreground hover:text-white"
								>
									Community Values
								</a>
							</li>
							<li>
								<a
									href="#join"
									className="text-muted-foreground hover:text-white"
								>
									Join Us
								</a>
							</li>
							<li>
								<a
									href="https://spinoutworld.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-white flex items-center"
								>
									SpinOut <ExternalLink className="ml-1 h-3 w-3" />
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Contact</h3>
						<ul className="space-y-3">
							<li className="text-muted-foreground">
								<a
									href="mailto:enrique.flores@utec.edu.pe"
									className="flex flex-row space-x-2"
								>
									<MailIcon />
									enrique.flores@utec.edu.pe
								</a>
							</li>
							<li className="text-muted-foreground">
								Follow us on social media for updates
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-roast-lightgray/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
					<p>
						&copy; {new Date().getFullYear()} Roast Nights. All rights reserved.
						An initiative from{" "}
						<a
							href="https://spinoutworld.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-white"
						>
							SpinOut
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

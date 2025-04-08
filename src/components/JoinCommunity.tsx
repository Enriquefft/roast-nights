"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { joinCommunity } from "@/actions/joined";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { joinInsertSchema, stages } from "@/db/schema/join";
import { showErrorToast } from "@/lib/handle-error";
import { SubmitButton } from "./submit-button";
import { Checkbox } from "./ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { PhoneInput } from "./ui/phone-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

const JoinCommunity = () => {
	const form = useForm({
		defaultValues: {
			agreement_feedback: false,
			agreement_privacy: false,
			name: "hi",
			phone: "+51984724707",
			stage: "idea" as const,
			startupName: "none",
			text: "",
		},
		resolver: zodResolver(
			joinInsertSchema.extend({
				agreement_feedback: z.boolean().refine((val) => val === true, {
					message: "You must agree to the feedback terms",
				}),
				agreement_privacy: z.boolean().refine((val) => val === true, {
					message: "You must agree to the privacy terms",
				}),
			}),
		),
	});
	const { handleSubmit, control } = form;
	const onSubmit = async (
		data: z.infer<typeof joinInsertSchema> & {
			agreement_feedback: boolean;
			agreement_privacy: boolean;
		},
	) => {
		if (!data.agreement_feedback || !data.agreement_privacy) {
			console.error("You must agree to the terms");
			return;
		}

		console.log("Submitting form data:", data);

		try {
			await joinCommunity(data);
		} catch (error: unknown) {
			console.error("Error submitting form data:", error);
			showErrorToast(error);
		}
	};

	return (
		<section className="py-20 px-4" id="join">
			<div className="max-w-3xl mx-auto bg-roast-darkgray border border-roast-lightgray rounded-2xl p-8">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Join Our Community
					</h2>
					<p className="text-muted-foreground">
						Ready for honest feedback that will actually help your startup?
						Apply to join our next session.
					</p>
				</div>

				<Form {...form}>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						{/* Name Field */}
						<FormField
							control={control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input placeholder="John Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* phone Field */}
						<FormField
							control={control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone number</FormLabel>
									<FormControl>
										<PhoneInput
											defaultCountry="PE"
											{...field}
											placeholder="Enter a phone number"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Startup Name Field */}
						<FormField
							control={control}
							name="startupName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Startup Name</FormLabel>
									<FormControl>
										<Input placeholder="Your Startup" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Startup Stage Field */}
						<FormField
							control={control}
							name="stage"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Startup Stage</FormLabel>

									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Whats the current stage of your startup?" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{stages.map((stage) => (
												<SelectItem key={stage} value={stage}>
													{stage}
												</SelectItem>
											))}
										</SelectContent>
									</Select>

									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Why Field */}
						<FormField
							control={control}
							name="text"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Why do you want to join? What feedback are you looking for?
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us a bit about what you're working on and what kind of feedback would be most valuable to you."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Agreement Checkbox */}
						<FormField
							control={control}
							name="agreement_feedback"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
									<FormControl>
										<Checkbox
											id="agreement"
											onCheckedChange={field.onChange}
											checked={field.value}
											className="size-7 my-auto"
										/>
									</FormControl>
									<FormLabel htmlFor="agreement" className="my-auto">
										I understand that feedback will be direct and unfiltered,
										and I'm ready for it.
									</FormLabel>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={control}
							name="agreement_privacy"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
									<FormControl>
										<Checkbox
											id="privacy"
											onCheckedChange={field.onChange}
											checked={field.value}
											className="size-7 my-auto"
										/>
									</FormControl>
									<FormLabel htmlFor="privacy" className="my-auto">
										I understand that this meetings are private and I will
										respect request for non-disclosure of information
									</FormLabel>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Submit Button */}
						<SubmitButton isSubmitting={form.formState.isSubmitting}>
							Submit Application
						</SubmitButton>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default JoinCommunity;

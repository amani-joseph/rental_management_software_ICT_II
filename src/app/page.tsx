import Image from "next/image";
import Logo from "@/public/Logo.svg";
import Hero from "@/public/hero-image.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Home() {
	return (
		<div>
			<div className="max-h-screen min-h-screen bg-[url('https://dub.sh/wLUbJ5I')] h-screen bg-cover bg-no-repeat bg-bottom bg-opacity-65  relative">
				{/* <div className="w-full h-screen  bg-gray-950 bg-opacity-65 absolute z-[1]"></div> */}
				<div className=" flex flex-row gap-4 justify-between p-4 ">
					<Image src={Logo} alt="logo" width={150} height={40} />
					<div className="flex flex-row gap-4">
						<div className="flex flex-row ">
							<div className="flex flex-row gap-4">
								<Link href={"/"}>
									<Button variant={"link"}>Home</Button>
								</Link>
								<Link href={"/"}>
									<Button variant={"link"}>About us</Button>
								</Link>
								<Link href={"/"}>
									<Button variant={"link"}>Contact Us</Button>
								</Link>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<Link href={"/sign_up"}>
								<Button variant={"outline"}>Sign Up</Button>
							</Link>
							<Link href={"/login"}>
								<Button
									variant={"secondary"}
									className="bg-purple-500 text-gray-100 hover:bg-purple-700 hover:text-neutral-200">
									Login
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="min-h-screen-[80] flex items-center justify-center px-6">
					<div className="text-center max-w-2xl  p-4 rounded-md">
						<Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
							Under construction
						</Badge>
						<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
							Simplicity in Rental Management
						</h1>
						<p className="mt-6 text-[17px] md:text-lg">
							Helping more than 200,000 landlords and real estate
							ageancies manage properties with ease across
							Australia
						</p>
						<div className="mt-12 flex items-center justify-center gap-4">
							<Button
								size="lg"
								className="rounded-full text-base bg-purple-500 ">
								Get Started{" "}
								<ArrowUpRight className="!h-5 !w-5" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

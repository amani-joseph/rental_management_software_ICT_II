import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div>
					<Image src="/public/Logo.png" alt="logo" width={200} height={50}/>
					<div>Test</div>
				</div>
			</main>
		</div>
	);
}

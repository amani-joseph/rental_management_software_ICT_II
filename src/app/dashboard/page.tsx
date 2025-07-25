import Payments from "@/components/dashboard/Payments";
import { ChartBarLabel } from "@/components/dashboard/dashboardSummary/chart";
import { SectionCards } from "@/components/section-cards";
import { FC } from "react";

const page = () => {
	return (
		<div className="flex gap-2 flex-col">

			<SectionCards/>
			<ChartBarLabel/>
		</div>
	);
};

export default page;

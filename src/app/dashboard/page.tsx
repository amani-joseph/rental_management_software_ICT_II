import { FC } from "react";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
	console.log("server log");

	return <div>Dashboard</div>;
};

export default Dashboard;

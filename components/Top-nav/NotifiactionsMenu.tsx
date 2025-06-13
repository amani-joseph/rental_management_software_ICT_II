import {AtSign, Bell, BellDot, BellOff} from "lucide-react"
import {Button} from "@/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,} from "@/ui/dropdown-menu"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/ui/card";

export function NotificationsMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-0 mx-2  w-6 h-6 rounded-full">
                    <BellDot className={" text-slate-900"}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit md:w-[300px] translate-x-8 md:translate-x-12" align="end" forceMount>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>
                            Choose what you want to be notified about.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-1">
                        <div
                            className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                            <Bell className="mt-px h-5 w-5"/>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Everything</p>
                                <p className="text-sm text-muted-foreground">
                                    Email digest, mentions & all activity.
                                </p>
                            </div>
                        </div>
                        <div
                            className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                            <AtSign className="mt-px h-5 w-5"/>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Available</p>
                                <p className="text-sm text-muted-foreground">
                                    Only mentions and comments.
                                </p>
                            </div>
                        </div>
                        <div
                            className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                            <BellOff className="mt-px h-5 w-5"/>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Ignoring</p>
                                <p className="text-sm text-muted-foreground">
                                    Turn off all notifications.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

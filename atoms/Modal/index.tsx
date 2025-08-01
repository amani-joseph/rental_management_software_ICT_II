import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface OnsubmitFuncProps {
    onSubmit: (value: string) => void
}

export function DialogAtom({
                               children, dialogName, title,description ,
                           }: {
    children: React.ReactNode;
    dialogName: string;
    title?: string;
    description?: string;
  
}) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">{dialogName}</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[825px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        {children}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

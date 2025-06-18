import { Raleway,Poppins, Inter,Montserrat  } from "next/font/google"
import {NextFontWithVariable} from "next/dist/compiled/@next/font";

export const inter:NextFontWithVariable = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

export const raleway:NextFontWithVariable = Raleway({
    subsets: ["latin"],
    variable: "--font-raleway",
    weight:["100","200","300","400","500","600","700","800","900"],
})

export const montserrat:NextFontWithVariable = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight:["100","200","300","400","500","600","700","800","900"],
})

export const poppins:NextFontWithVariable = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight:["100","200","300","400","500","600","700","800","900"],
})

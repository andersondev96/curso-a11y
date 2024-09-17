import { axeAccessibilityReporters } from "@/utils/axeAccessibilityReporters";
import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";


function MyApp({ Component, pageProps}: AppProps) {
	useEffect(() => {
		axeAccessibilityReporters()
	})
	return <Component {...pageProps} />
}

export default MyApp
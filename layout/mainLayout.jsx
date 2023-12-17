import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
		</div>
		<script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="208422341">
		</script>
	);
}

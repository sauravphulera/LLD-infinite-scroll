import { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
	const [memes, setMemes] = useState([]);
	const [showShimmer, setShowShimmer] = useState(false);

	const handleScroll = (e) => {

		/**
		 * scrollY - How much we have scrolled on page
		 * innerHeight - Height of the visible window
		 * document.body.scrollHeight -  total height of web page
		 */
		if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
			console.log("its the endgame");
			fetchMemes();
		}
	}

	useEffect(() => {
		fetchMemes();

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const fetchMemes = async () => {
		setShowShimmer(true);

		// handle api fail errors
		const data = await fetch("https://meme-api.com/gimme/20");
		const json = await data.json();

		setShowShimmer(false);
		setMemes((memes) => [...memes, ...json.memes]);
	};

	return (
		<div className="flex flex-wrap">
			{memes.map((meme, i) => (
				<MemeCard key={i} data={meme} />
			))}

			{showShimmer && <Shimmer />}
		</div>
	);
};
export default Body;
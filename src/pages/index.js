	import * as React from "react"
	import { Helmet } from "react-helmet";
	import { StaticImage } from "gatsby-plugin-image";
	import '../scss/_reset.scss';
	import '../scss/_home.scss';

	// markup
	const IndexPage = () => {
	return (
	<>
		<Helmet>
				<title>{'Sales Chasers - Inside Sales Consulting or Lead Generation Services - Columbus, OH'}</title>
				<meta name="description" content="Inside Sales Consulting or Lead Generation."></meta>
			</Helmet>
		<div className="top-nav">
		<div className="section-wrap">
			<div className="inner">
			<ul>
				<li>
					<a href="tel:678-231-1072" name="phone" target="_blank">678-231-1072</a>
				</li>
				<li className="divider">
					|
				</li>
				<li>
					<a href="mailto:michelle@saleschasers.com" name="email" target="_blank">michelle@saleschasers.com</a>
				</li>
			</ul>
			</div>
		</div>
		</div>
		<div className="section-wrap">
		<div className="inner">
			<h1 className="heading">
				Website Under Construction
			</h1>
			<div className="image-text">
				<div className="image">
					<StaticImage
					src="../images/michelle-page.png"
					alt="Michelle Page"
					placeholder="none"
					layout="fixed"
					width={153}
					height={151}
					className="headshot"
					/>
				</div>
				<div className="text">
					<p>
						For information regarding Inside Sales Consulting or Lead Generation, please contact Michelle Page at <a href="tel:678-231-1072"target="_blank">678-231-1072</a> or <a href="mailto:michelle@saleschasers.com"target="_blank">michelle@saleschasers.com</a>
					</p>
				</div>
			</div>
			<StaticImage
				src="../images/tree.png"
				alt="Money Tree"
				placeholder="none"
				layout="full_width"
				className="tree"
				/>
			</div>
		</div>
	</>
	)
}

export default IndexPage

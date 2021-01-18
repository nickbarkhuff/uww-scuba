import React from "react";

const Section = (props) => {
	return (
		<div
			className={(""
				+ (props.last ? "flex1 dFlex fdColumnReverse " : "varSectionSpacing ")
			).trim()}>
			<div
				className={(""
					+ (props.bg === "white" ? "bgWhite cBlack " : "")
					+ (props.bg === "black" ? "bgBlack " : "")
					+ (props.full ? "" : "varPageGutters varSectionRadius ")
					+ (props.shadow ? "varSectionShadow " : "")
				).trim()}
				style={{
					...(props.bgImage && {
						backgroundImage: `url(${props.bgImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat"
					}),
					position: "relative"
				}}>
				<div
					style={{
						...(props.overlay && {
							backgroundColor: `rgba(0,0,0,${props.overlay})`,
							position: "absolute",
							height: "100%",
							width: "100%"
						})
					}}>
				</div>
				<div
					className={(""
						+ ("varSectionPadding ")
						+ (props.full ? "varPageGutters " : "")
						+ (props.className || "")
					).trim()}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Section;

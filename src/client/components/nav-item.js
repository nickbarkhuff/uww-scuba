import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavItem = (props) => {
	const isCurrentPage = useLocation().pathname === props.to;
	return (
		<span className="fs1">
			<Link
				className={(""
					+ ("tdNone cInherit ")
					+ (isCurrentPage ? "fwBold " : "")
				).trim()}
				to={props.to}>
				{props.children}
			</Link>
			{!props.last && (" | ")}
		</span>
	);
};

export default NavItem;

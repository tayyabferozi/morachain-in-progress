import React from "react";
import clsx from "clsx";

const Dropdown = ({
	rootClassName,
	btn,
	children,
	dropdownItems,
	connectWalletHandler,
}) => {
	return (
		<div className={clsx("dropdown", { btn }, rootClassName)}>
			{/* {btn ? (
        <img
          className="arrow m-0"
          src="./assets/vectors/select-arrow.svg"
          alt="arrow"
        />
      ) : (
        <img
          className="arrow m-0"
          src="./assets/vectors/caret-down.svg"
          alt="arrow"
        />
      )} */}
			{children}
			<div className="dropdown-items">
				<ul className="dropdown-items-main">
					{dropdownItems.map((el, idx) => {
						return (
							<li
								onClick={() => {
									if (el === "Metamask") {
										connectWalletHandler(true);
									}
								}}
								className={clsx({ clickable: btn })}
								key={"dropdown-item" + Math.random() + idx}
							>
								{el}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;

import React from "react";

export default function AnimatedNumber({ value }: { value: any }) {
	return <span>{Intl.NumberFormat("en-US").format(value.toFixed(0))}</span>;
}

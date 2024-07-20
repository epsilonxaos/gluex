import { InfiniteMovingCards } from "../animation/infinite-moving-cards";

const BrandSection = () => {
	return (
		<section className="w-full lg:w-[85%] mx-auto md:py-[60px] lg:py-[130px]">
			<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
				Gluing <span className="text-verde">DeFi</span>
			</h3>
			<p className="mb-8 w-[230px] mx-auto md:w-full md:font-auxMono text-sm text-center">GlueX pulls together the capabilities of all DeFi protocols</p>

			<div className="py-[60px]">
				<InfiniteMovingCards className="mx-auto w-[90%]" items={brands1} direction="right" speed="slow" />
				<InfiniteMovingCards className="mx-auto w-[90%]" items={brands2} direction="left" speed="slow" />
			</div>
		</section>
	);
};

const brands1 = [{ icon: "/img/logos/1.svg" }, { icon: "/img/logos/2.svg" }, { icon: "/img/logos/3.svg" }, { icon: "/img/logos/4.svg" }, { icon: "/img/logos/5.svg" }, { icon: "/img/logos/6.svg" }, { icon: "/img/logos/7.svg" }, { icon: "/img/logos/8.svg" }, { icon: "/img/logos/9.svg" }, { icon: "/img/logos/10.svg" }, { icon: "/img/logos/11.svg" }];
const brands2 = [{ icon: "/img/logos/12.svg" }, { icon: "/img/logos/13.svg" }, { icon: "/img/logos/14.svg" }, { icon: "/img/logos/15.svg" }, { icon: "/img/logos/16.svg" }, { icon: "/img/logos/17.svg" }, { icon: "/img/logos/18.svg" }, { icon: "/img/logos/19.svg" }, { icon: "/img/logos/20.svg" }, { icon: "/img/logos/21.svg" }];

export default BrandSection;

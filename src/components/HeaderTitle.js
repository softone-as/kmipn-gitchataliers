const HeaderTitle = ({ title }) => {
	return (
		<div className='category-title col-12'>
			<svg
				width='21'
				height='26'
				viewBox='0 0 21 26'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.6667 25L10.3333 18.3333L1 25V3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H17C17.7072 1 18.3855 1.28095 18.8856 1.78105C19.3857 2.28115 19.6667 2.95942 19.6667 3.66667V25Z'
					stroke='#9EA9C1'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<span>{title}</span>
		</div>
	);
};

export default HeaderTitle;

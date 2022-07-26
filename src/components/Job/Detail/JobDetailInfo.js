export default function JobDetailInfo({ title, location }) {
	return (
		<div className='job-detail-header d-flex justify-content-between align-items-center'>
			<div className='job-info'>
				<h5 className='card-title mt-2'>{title}</h5>
				<div className='job-location'>
					<svg
						width='17'
						height='24'
						viewBox='0 0 17 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.84939 23.1589L7.84773 23.1567C6.69955 21.6576 4.85069 19.0938 3.29152 16.4004C2.51189 15.0536 1.80997 13.6834 1.3042 12.4039C0.795449 11.1169 0.5 9.95814 0.5 9.02335C0.5 4.28741 4.10939 0.5 8.5 0.5C12.8889 0.5 16.5 4.28748 16.5 9.02335C16.5 9.95748 16.2024 11.1159 15.6906 12.403C15.1817 13.6825 14.4761 15.0528 13.6939 16.3998C12.1298 19.0933 10.2808 21.6573 9.15024 23.1594C8.8057 23.6137 8.19372 23.6135 7.84939 23.1589ZM8.5 12.5311C10.3666 12.5311 11.8333 10.9299 11.8333 9.02335C11.8333 7.11679 10.3666 5.51557 8.5 5.51557C6.63337 5.51557 5.16667 7.11679 5.16667 9.02335C5.16667 10.9299 6.63337 12.5311 8.5 12.5311Z'
							stroke='#7E8CAC'
						/>
					</svg>

					<span>{location}</span>
				</div>
			</div>
			<button className='btn-apply'>
				Lamar Sekarang
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.33337 8.00002L7.33337 10L10.6667 6.66669'
						stroke='#F0F0F0'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z'
						stroke='#F0F0F0'
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</svg>
			</button>
		</div>
	);
}

import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className='col-12 col-lg-3 col-navbar d-block'>
			<aside className='sidebar'>
				<div className='profile d-flex justify-content-around align-items-center px-1'>
					<button
						id='toggle-navbar'
						// onclick='toggleNavbar()'
					>
						<img
							src='./assets/img/global/navbar-times.svg'
							className=''
							alt=''
						/>
					</button>

					<div className='profile-img'>
						<img src='/assets/img/profile.png' alt='' />
					</div>

					<div className='profile-desc'>
						<h4 className='profile-name'>Bibit Bangsa</h4>
						<p className='profile-email'>bibit@gmail.com</p>
					</div>
				</div>

				<div className='sidebar-item-container mt-3'>
					<Link
						to='/'
						className='sidebar-item'
						// onclick='toggleActive(this)'
					>
						<svg
							width='26'
							height='24'
							viewBox='0 0 26 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M21.4082 23H15.0556V17.7194V16.7194H14.0556H10.9153H9.91528V17.7194V23H4.01131V14.8679V13.8679H3.01131H1.79445C1.35698 13.8679 1 13.511 1 13.0735C1 12.8638 1.08411 12.6606 1.23423 12.5105L12.7097 1.04333L24.1852 12.5105C24.4959 12.8211 24.4959 13.3246 24.1866 13.6351L24.1851 13.6367C24.0387 13.7842 23.8383 13.8679 23.625 13.8679H22.4082H21.4082V14.8679V23Z'
								stroke='#9EA9C1'
								strokeWidth='2'
							/>
						</svg>

						<span>Halaman Utama</span>
					</Link>

					<Link
						to='/'
						className='sidebar-item'
						// onclick='toggleActive(this)'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z'
								stroke='#7E8CAC'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10'
								stroke='#7E8CAC'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M3 6H21'
								stroke='#7E8CAC'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span>Mata Pelajaran</span>
					</Link>

					<Link
						to='/job'
						className='sidebar-item'
						// onclick='toggleActive(this)'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z'
								stroke='#7E8CAC'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M1 10H23'
								stroke='#7E8CAC'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span>Lowongan Pekerjaan</span>
					</Link>
				</div>
			</aside>
		</div>
	);
}

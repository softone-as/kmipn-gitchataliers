import { data } from '../data/dummy';

export default function Email({ id }) {
	const { jobs } = data;
	const jobCurrent = jobs.find((item) => item.id === Number(id));

	return (
		<div className='col'>
			<div className='card job-email'>
				<div className='card-header bg-primary text-light py-4'>
					<h5>
						Selamat, anda lolos tahap administrasi di{' '}
						{jobCurrent.company}!
					</h5>
				</div>
				<div className='card-body'>
					<div className='job-detail-header d-flex flex-column justify-content-between align-items-center'>
						<div className='message'>
							Hi, Bibit Bangsa!
							<br />
							<br />
							Selamat lamaran yang anda telah kirimkan untuk
							lowongan pekerjaan sebagai {
								jobCurrent.title
							} di {jobCurrent.company} telah memenuhi kriteria
							yang kami butuhkan. Selanjutnya dimohon untuk
							mengikuti tahap interview atau wawancara yang akan
							dilaksanalan pada.
							<br />
							<br />
							Hari : Senin Tanggal : 9 Mei 2022 Tempat : Ruang
							Human Resource Development, Kantor{' '}
							{jobCurrent.company}, {jobCurrent.location}
							<br />
							<br />
							Silahkan konfirmasi kehadirannya atau ajukan waktu
							lain untuk melaksanakan tahap wawancara.
							<br />
							<br />
							Terimakasih
						</div>
						<div className='action d-flex flex-column justify-content-between align-items-center mt-3'>
							<button className='btn-apply'>
								Konfirmasi Kehadiran
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
							<button className='btn-apply bg-light border text-muted'>
								Ajukan jadwal lain
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

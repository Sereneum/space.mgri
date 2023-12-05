import { LinkBreak } from '@phosphor-icons/react';

const Unreach = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
		<div
			style={{
			  display: 'flex',
			  flexDirection: 'column',
			  gap: '15px',
			  alignItems: 'center',
			  marginTop: '70px',
			}}
		>
			<LinkBreak
				className='preloader_logo icon_big'
				style={{
				  color: 'red', width: '60px', height: '60px', margin: '0',
				}}
			/>
			<p style={{ textAlign: 'center', color: 'white', lineHeight: '1.5' }}>
				Не удалось установить связь со stud.mgri.ru <br />
				Попробуйте войти позднее.
			</p>
			<div
				onClick={handleReload}
				style={{
				  cursor: 'pointer', width: 'min-content', padding: '6px 12px 7px 12px', border: '2px solid white', borderRadius: '14px', marginTop: '50px',
				}}
			>
				<p style={{ color: 'white', fontSize: '14px' }}>Перезагрузка</p>
			</div>
		</div>
  );
};

export default Unreach;

import { styled } from 'styled-components';
import {
  ClockClockwise, FireSimple, PaintBrush, PushPin, PencilSimple, ClockCountdown, DownloadSimple, CloudArrowUp, ClockAfternoon, MoonStars, Files,
} from '@phosphor-icons/react';

const ListItemWrapper = styled.div`
	width: 500px;
	height: min-content;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-left: 70px;

	@media (max-width: 1220px) {
		align-items: center;
		padding-left: 0px;
	}
	@media (max-width: 600px) {
		width: 100%
	}


`;
const IconContainer = styled.div`
	background-color: var(--var-hover);
	width: min-content;
	height: min-content;
	padding: 8px 8px 4px 8px;
	border-radius: 10px;
	border: #0000001A solid 1px;
`;

const Title = styled.h4`
	font-size: 20px;
`;

const Description = styled.p`
	font-size: 16px;
	opacity: 0.6;
	font-weight: 400;
	line-height: 1.4;
`;

const ListItem = (props) => (
		<ListItemWrapper>
			<IconContainer>
				{props.icon && props.icon === 'FireSimple' && <FireSimple weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'ClockClockwise' && <ClockClockwise weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'PaintBrush' && <PaintBrush weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'PushPin' && <PushPin weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'PencilSimple' && <PencilSimple weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'ClockCountdown' && <ClockCountdown weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'CloudArrowUp' && <CloudArrowUp weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'DownloadSimple' && <DownloadSimple weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'ClockAfternoon' && <ClockAfternoon weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'Files' && <Files weight="bold" className="icon_mid low_opacity"/>}
				{props.icon && props.icon === 'MoonStars' && <MoonStars weight="bold" className="icon_mid low_opacity"/>}
			</IconContainer>
			<Title>{props.title}</Title>
			<Description>{props.description}</Description>
		</ListItemWrapper>
	 );

export default ListItem;

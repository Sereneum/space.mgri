import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Enter from '../components/enter_block/Enter';
import Home from '../components/homescreen/Home';
import Privacy from '../components/privacy_block/Privacy';
import { Faq } from '../components/faq_block/Faq';
import Schedule from '../components/schedule_block/Schedule';
import Menu from '../components/menu_block/Menu';
import Course from '../components/course_block/Course';
import CoursesTablet from '../components/courses_block/CoursesTablet';
import DeadlineTablet from '../components/deadline_block/DeadlineTablet';
import Task from '../components/task_block/Task';
import Settings from '../components/settings_block/Settings';
import Credits from '../components/credits_block/Credits';

const ProjectRoutes = ({ isAuth }) => (
		<Routes>
			{/* LOGIN */}
			{!isAuth ? (
				<Route path='/login' element={<Enter />} />
			) : (
				<Route path='/login' element={<Navigate to='/' replace />} />
			)}

			{!isAuth ? (
				<Route path='/home' element={<Home />} />
			) : (
				<Route path='/home' element={<Navigate to='/' replace />} />
			)}

			{!isAuth && <Route path='*' element={<Navigate to='/home' replace />} />}

			<Route path='/faq' element={<Faq />} />
			<Route path='/privacy' element={<Privacy />} />

			{/* auth */}
			{isAuth && <Route path='/' element={<Schedule />} />}
			<Route path='/menu' element={<Menu />} />
			<Route path='/course' element={<Course />} />
			<Route path='/courses' element={<CoursesTablet />} />
			<Route path='/deadlines' element={<DeadlineTablet />} />
			<Route path='/task' element={<Task />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/credits' element={<Credits />} />
		</Routes>
);

export default ProjectRoutes;

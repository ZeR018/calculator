import React from 'react'
import {SiMatrix} from 'react-icons/si'
import {IoMdHelpCircle, IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

export const sidebarData = [
	{
		title: 'Матрица',
		path: '/matrix',
		icon: <SiMatrix />,
		iconClosed: <IoIosArrowDown />,
		iconOpened: <IoIosArrowUp />,
		subNav: [
			{
				title: 'Умножение',
				path: '/matrix/multiplication',
				icon: '*',
			},
			{
				title: 'Сумма',
				path: '/matrix/sum',
				icon: '+',
			},
			{
				title: 'Определитель',
				path: '/matrix/determinant',
				icon: 'det',
			},
			{
				title: 'Обратная',
				path: '/matrix/reverse',
				icon: '1/m',
			},
		]
	},
	{
		title: 'Производная',
		path: '/derivative',
		icon: 'dx',
		iconClosed: <IoIosArrowDown />,
		iconOpened: <IoIosArrowUp />,
	},
	{
		title: 'Интеграл',
		path: '/integral',
		icon: '∫',
		iconClosed: <IoIosArrowDown/>,
		iconOpened: <IoIosArrowUp />,
		subNav: [
			{
				title: 'Неопределенный интеграл',
				path: '/integral/undefined',
				icon: '∫',
			},
			{
				title: 'Определенный интеграл',
				path: '/integral/definite',
				icon: '∫',
			},
		]
	},
	{
		title: 'Поддержка',
		path: '/support',
		icon: <IoMdHelpCircle />,
		iconClosed: <IoIosArrowDown />,
		iconOpened: <IoIosArrowUp />,
	}
]
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
				title: 'Бинарные операции',
				path: '/matrix/binary',
				icon: '+',
			},
			{
				title: 'Унарные операции',
				path: '/matrix/unary',
				icon: 'det',
			},
		]
	},
	{
		title: 'Выражения',
		path: '/expressions',
		icon: 'exp',
		iconClosed: <IoIosArrowDown />,
		iconOpened: <IoIosArrowUp />,
	},
	{
		title: 'Предел',
		path: '/lim',
		icon: 'lim',
		iconClosed: <IoIosArrowDown />,
		iconOpened: <IoIosArrowUp />,
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
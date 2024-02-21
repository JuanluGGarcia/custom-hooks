import { v4 } from 'uuid';

const tabsA = [
	{ id: v4(), name: 'Tab1' },
	{ id: v4(), name: 'Tab2' },
	{ id: v4(), name: 'Tab3' }
];

const tabsInfoA = ['Info 1', 'Info 2', 'Info 3'];

const tabsB = [
	{ id: v4(), name: 'Tab1' },
	{ id: v4(), name: 'Tab2' },
	{ id: v4(), name: 'Tab3' },
	{ id: v4(), name: 'Tab4' },
	{ id: v4(), name: 'Tab5' }
];

const tabsInfoB = ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5'];


export const tabsforA = {
	tabsA,
	tabsInfoA
};

export const tabsforB = {
	tabsB,
	tabsInfoB
};
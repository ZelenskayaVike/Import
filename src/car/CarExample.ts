import {First, Second} from './Car'
import {First, Second} from './Car'

const MyFirstCar = new First(
	'MAN',
	'TGA',
	2019,
	'желтый',
	'truck',
	540,
	35
)

const MySecondCar = new Second(
	'AUDI',
	'A8',
	2018,
	'черный',
	'седан',
	600,
	4
)

console.log(MyFirstCar.showCharacteristic())
console.log(MySecondCar.showCharacteristic())

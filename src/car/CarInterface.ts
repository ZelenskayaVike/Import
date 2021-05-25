export interface CarInterface {
	_brand: string,
	_model: string,
	_year: number,
	_color: string,
	_carBody: string
}

export interface SecondCar {
	power: number
	cargo: number
	showCharacteristic: () => string
}

export interface FirstCar {
	power: number
	seats: number
	showCharacteristic: () => string
}

import {CarInterface, FirstCar, LkwCar, PkwCar, SecondCar} from './CarInterface'

abstract class MyCar implements CarInterface {
	_MyBrand: string
	_MyModel: string
	_MyYear: number
	_MyColor: string
	_MyCarBody: string

	get brand(): string {
		return this._MyBrand
	}

	set brand(val: string) {
		if (typeof val === 'string') {
			this._MyBrand = val
		}
	}

	get model(): string {
		return this._MyModel
	}

	set model(val: string) {
		if (typeof val === 'string') {
			this._MyModel = val
		}
	}

	get year(): number {
		return this._MyYear
	}

	set year(val: number) {
		if (typeof val === 'number') {
			this._MyYear = val
		}
	}

	get color(): string {
		return this._MyColor
	}

	set color(val: string) {
		if (typeof val === 'string') {
			this._MyColor = val
		}
	}

	get carBody(): string {
		return this._MyCarBody
	}

	set carBody(val: string) {
		if (typeof val === 'string') {
			this._MyCarBody = val
		}
	}
}

export class Second extends MyCar implements SecondCar {
	power: number
	cargo: number
	constructor(
		_MyBrand: string,
		_MyModel: string,
		_MyYear: number,
		_MyColor: string,
		_MyCarBody: string,
		power: number,
		cargo: number
	) {
		super(_MyBrand, _MyModel, _MyYear, _MyColor, _MyCarBody)
		this.power = power
		this.cargo = cargo
	}
	showCharacteristic(): string {
		return `
		Автомобиль ${this.brand} ${this.model}, ${this.year} года выпуска, 
		цвет ${this.color}, 
		относится к типу авто ${this.carBody}, 
		мощность двигателя ${this.power} л/с, 
		грузоподьемность ${this.cargo}.
		`
	}
}

export class First  extends MyCar implements FirstCar {
	power: number
	seats: number

	constructor(
		_MyBrand: string,
		_MyModel: string,
		_MyYear: number,
		_MyColor: string,
		_MyCarBody: string,
		power: number,
		seats: number
	) {
		super(_MyBrand, _MyModel, _MyYear, _MyColor, _MyCarBody)
		this.power = power
		this.seats = seats
	}


	showCharacteristic(): string {
		return `
		Автомобиль ${this.brand} ${this.model}, ${this.year} года выпуска, 
		цвет ${this.color}, 
		тип кузова ${this.carBody}, 
		мощность двигателя ${this.power} л/с, 
		посадочных мест ${this.seats} т.
		`
	}
}

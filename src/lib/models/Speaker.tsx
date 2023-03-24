export default class Speaker {
	readonly id: string;
	readonly name: string;
	readonly lecture: string;

	constructor(data: any) {
		this.id = data.id;
		this.name = data.name;
		this.lecture = data.lecture;
	}
}

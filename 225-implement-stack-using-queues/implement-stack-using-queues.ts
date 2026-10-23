class MyStack {
    queue: number[];

    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);

        let rotations = this.queue.length - 1;

        while (rotations > 0) {
            this.queue.push(this.queue.shift()!);
            rotations--;
        }
    }

    pop(): number {
        return this.queue.shift()!;
    }

    top(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}
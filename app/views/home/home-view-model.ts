import { Observable } from '@nativescript/core';

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }

    startLearning() {
        console.log('Starting the learning journey...');
    }
}
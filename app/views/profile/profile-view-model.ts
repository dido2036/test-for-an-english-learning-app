import { Observable } from '@nativescript/core';

export class ProfileViewModel extends Observable {
    constructor() {
        super();
    }

    viewStats() {
        console.log('Viewing statistics...');
    }

    openSettings() {
        console.log('Opening settings...');
    }
}